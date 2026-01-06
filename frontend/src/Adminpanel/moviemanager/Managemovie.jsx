import React, { useState, useEffect } from 'react';
import '../moviemanager/Managemovie.css';
import { Table, Button, Container, Spinner, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [toggleStates, setToggleStates] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();
  const location = useLocation();
  const menuName = location.state?.menu || "No data received";

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  // Fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies');
        const data = await res.json();
        setMovies(data);
      } catch (err) {
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Extract rows (movie + theater)
  const getRows = () => {
    const rows = [];
    movies.forEach(movie => {
      const { _id: movieId, typePrice = [], theaters = [] } = movie;

      if (theaters.length === 0) {
        rows.push({
          rowId: `${movieId}__noTheater`,
          movieId,
          theaterName: 'N/A',
          screenNames: 'N/A',
          typePrice,
          isEnabled: false,
        });
      } else {
        theaters.forEach((th, ti) => {
          const tName = th.name || 'N/A';
          const screens = th.screens || [];
          const allScreenNames = screens.map(sc => sc.screenName).filter(Boolean);
          const screenNamesString = allScreenNames.length > 0 ? allScreenNames.join(', ') : 'N/A';

          rows.push({
            rowId: `${movieId}__${ti}`,
            movieId,
            theaterName: tName,
            screenNames: screenNamesString,
            typePrice,
            isEnabled: th.isEnabled ?? true,
          });
        });
      }
    });
    return rows;
  };

  // Format class & price
  const formatTypes = (typePriceArray) => {
    if (!Array.isArray(typePriceArray) || typePriceArray.length === 0) return 'N/A';

    return typePriceArray.map(tp => {
      const types = tp.type || [];
      const prices = tp.price || [];
      return types.map((t, i) => `${t}: ₹${prices[i] ?? '0'}`).join(', ');
    }).join(' | ');
  };

  const rows = getRows();

  // Initialize toggle states when movies change
  useEffect(() => {
    const initialStates = {};
    movies.forEach(movie => {
      movie.theaters?.forEach((th, i) => {
        initialStates[`${movie._id}__${i}`] = th.isEnabled ?? true;
      });
    });
    setToggleStates(initialStates);
  }, [movies]);

  // Search filter
  const filteredRows = rows.filter(r =>
    r.movieId && movies.find(m => m._id === r.movieId)?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexLast = currentPage * rowsPerPage;
  const indexFirst = indexLast - rowsPerPage;
  const currentRows = filteredRows.slice(indexFirst, indexLast);
  const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

  // Row select
  const handleRowSelect = (rowId) => {
    setSelectedRows(prev =>
      prev.includes(rowId) ? prev.filter(id => id !== rowId) : [...prev, rowId]
    );
  };

  // Delete selected
  const handleDeleteSelected = async (customRowIds = null) => {
    const rowIdsToDelete = customRowIds || selectedRows;
    if (rowIdsToDelete.length === 0) {
      alert('Please select at least one row to delete.');
      return;
    }
    if (!window.confirm('Are you sure you want to delete these?')) return;

    try {
      const movieIdsToDelete = Array.from(new Set(
        rowIdsToDelete.map(rid => rid.split('__')[0])
      ));
      for (const mid of movieIdsToDelete) {
        await fetch(`http://localhost:5000/api/movies/${mid}`, { method: 'DELETE' });
      }
      setMovies(prev => prev.filter(m => !movieIdsToDelete.includes(m._id)));
      setSelectedRows([]);
    } catch (err) {
      console.error('Error deleting selected movies:', err);
    }
  };

  // Export data
  const exportData = (type) => {
    if (selectedRows.length === 0) {
      alert('Please select at least one row to export.');
      return;
    }

    const exportRows = rows.filter(r => selectedRows.includes(r.rowId));
    const data = exportRows.map(r => ({
      Theater: r.theaterName,
      Movie: movies.find(m => m._id === r.movieId)?.name || 'N/A',
      Screens: r.screenNames,
      Types: formatTypes(r.typePrice),
    }));

    if (type === 'excel') {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Movies');
      XLSX.writeFile(workbook, 'movies.xlsx');
    } else if (type === 'csv') {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const csv = XLSX.utils.sheet_to_csv(worksheet);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'movies.csv');
    } else if (type === 'pdf') {
      const doc = new jsPDF();
      autoTable(doc, {
        head: [['Theater', 'Movie', 'Screens', 'Types']],
        body: data.map(d => [d.Theater, d.Movie, d.Screens, d.Types]),
      });
      doc.save('movies.pdf');
    }
  };

  // Toggle per movie-theater only
  const handleToggle = async (rowId) => {
    const updatedState = !toggleStates[rowId];
    setToggleStates((prev) => ({
      ...prev,
      [rowId]: updatedState,
    }));

    const [movieId, theaterIndex] = rowId.split("__");
    if (!movieId || theaterIndex === "noTheater") return;

    try {
      await fetch(`http://localhost:5000/api/movies/${movieId}/theaters/${theaterIndex}/toggle`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isEnabled: updatedState }),
      });

      console.log(`Toggled theater ${theaterIndex} for movie ${movieId}`);
    } catch (err) {
      console.error("Error updating toggle:", err);
    }
  };

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="managemovie">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp;&nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container className="py-4 moviecontainer">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="text-danger">Manage Movie List</h3>
          <div>
            <Button variant="outline-danger" size="sm" onClick={() => handleDeleteSelected()} className="me-2">Delete</Button>
            <Button variant="outline-success" size="sm" onClick={() => exportData('excel')} className="me-2">Excel</Button>
            <Button variant="outline-primary" size="sm" onClick={() => exportData('csv')} className="me-2">CSV</Button>
            <Button variant="outline-dark" size="sm" onClick={() => exportData('pdf')}>PDF</Button>
          </div>
        </div>

        <Form.Group className="mb-3" controlId="searchInput">
          <Form.Control
            type="text"
            placeholder="Search movie by name..."
            value={searchTerm}
            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          />
        </Form.Group>

        <div className="d-flex justify-content-end mb-2">
          <Form.Select
            style={{ width: '150px' }}
            value={rowsPerPage}
            onChange={(e) => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
          >
            <option value={5}>5 per page</option>
            <option value={10}>10 per page</option>
            <option value={20}>20 per page</option>
          </Form.Select>
        </div>

        {loading ? (
          <div className="text-center"><Spinner animation="border" /></div>
        ) : (
          <>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    <Form.Check
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedRows(currentRows.map(r => r.rowId));
                        } else {
                          setSelectedRows([]);
                        }
                      }}
                      checked={
                        currentRows.length > 0 &&
                        selectedRows.length === currentRows.length &&
                        currentRows.every(r => selectedRows.includes(r.rowId))
                      }
                    />
                  </th>
                  <th>Theater Name</th>
                  <th>Movie Name</th>
                  <th>Screens</th>
                  <th>Class & Price</th>
                  <th>Actions</th>
                  <th>Toggle</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.length === 0 ? (
                  <tr><td colSpan="7" className="text-center">No data found.</td></tr>
                ) : currentRows.map(r => {
                  const movie = movies.find(m => m._id === r.movieId);
                  return (
                    <tr key={r.rowId}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedRows.includes(r.rowId)}
                          onChange={() => handleRowSelect(r.rowId)}
                        />
                      </td>
                      <td>{r.theaterName}</td>
                      <td>{movie?.name ?? 'N/A'}</td>
                      <td>{r.screenNames}</td>
                      <td>{formatTypes(r.typePrice)}</td>
                      <td>
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="me-2"
                          onClick={() => navigate('/newmovie', { state: { movie, edit: true } })}
                        >Edit</Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDeleteSelected([r.rowId])}
                        >Delete</Button>
                      </td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`custom-switch-${r.rowId}`}
                          checked={toggleStates[r.rowId] || false}
                          onChange={() => handleToggle(r.rowId)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>

            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="me-2"
                >Previous</Button>
                {[...Array(totalPages)].map((_, idx) => (
                  <Button
                    key={idx + 1}
                    variant={currentPage === idx + 1 ? "primary" : "outline-primary"}
                    size="sm"
                    onClick={() => setCurrentPage(idx + 1)}
                    className="me-1"
                  >{idx + 1}</Button>
                ))}
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >Next</Button>
              </div>
            )}
          </>
        )}
      </Container>
    </>
  );
}
