import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import '../moviemanager/Newmovie.css';
import Adminsidebar from '../AdminSide/Adminsidebar';
import Adminheader from '../AdminHead/Adminheader';
import { useNavigate, useLocation } from 'react-router-dom';

const MovieManager = () => {
  const empty = {
    name: '',
    description: '',
    duration: '',
    format: '2D',
    language: [],
    releaseDate: '',
    imageUrl: '',
    rating: '',
    genre: [],
    certificate: [],
    cast: [{ name: '', imageFile: null }],
    crew: [{ name: '', role: '', imageFile: null }],
    theaters: [{ 
      name: '', 
      screens: [{ screenName: '', showTimes: [] }] 
    }],
    typePrice: [{ type: [], price: [] }]
  };

  const genreOptions = [
    { value: 'Action', label: 'Action' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Family', label: 'Family' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Crime', label: 'Crime' },
    { value: 'Mystery', label: 'Mystery' },
    { value: 'SuperHero', label: 'SuperHero' },
  ];

  const languageOptions = [
    { value: 'English', label: 'English' },
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Tamil', label: 'Tamil' },
    { value: 'Telugu', label: 'Telugu' },
    { value: 'Kannadam', label: 'Kannadam' },
    { value: 'Malayalam', label: 'Malayalam' },
  ];

  const certificateOptions = [
    { value: 'U', label: 'U' },
    { value: 'UA', label: 'UA' },
    { value: 'UA16+', label: 'UA16+' },
    { value: 'UA16+', label: 'UA13+' },
    { value: 'A', label: 'A' }
  ];

  const showTimeOptions = [
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "12:30 PM", label: "12:30 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "07:00 PM", label: "07:00 PM" },
    { value: "11:00 PM", label: "11:00 PM" },
  ];

  const typeOptions = [
    { value: 'Platinum', label: 'Platinum' },
    { value: 'Gold', label: 'Gold' },
    { value: 'Silver', label: 'Silver' }
  ];

  const priceOptions = [
    { value: '$150', label: '$150' },
    { value: '$130', label: '$130' },
    { value: '$100', label: '$100' }
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(empty);
  const [editIndex, setEditIndex] = useState(null);
  const [posterPreview, setPosterPreview] = useState('');
  const [errors, setErrors] = useState({});
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const menuName = location.state?.menu || "No data received";

  useEffect(() => {
    const stateMovie = location.state?.movie;
    const isEdit = location.state?.edit;

    if (isEdit && stateMovie) {
      setForm({
        ...stateMovie,
        genre: stateMovie.genre.map(g => ({ value: g, label: g })),
        language: stateMovie.language.map(l => ({ value: l, label: l })),
        certificate: stateMovie.certificate.map(c => ({ value: c, label: c }))
      });
      setEditIndex(stateMovie._id);
      setPosterPreview(stateMovie.imageUrl);
    }
  }, [location.state]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleMultiSelectChange = (field, selected) => {
    setForm(f => ({ ...f, [field]: selected }));
  };

  // Poster
  const handlePosterChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await toBase64(file);
      setForm(f => ({ ...f, imageUrl: base64 }));
      setPosterPreview(base64);
    }
  };

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = err => reject(err);
  });

  // Cast & Crew
  const handleCastChange = (index, e) => {
    const { name, value, files } = e.target;
    const newCast = [...form.cast];
    if(name==='imageFile') newCast[index][name]=files[0];
    else newCast[index][name]=value;
    setForm(f=>({...f, cast:newCast}));
  };

  const handleCrewChange = (index, e) => {
    const { name, value, files } = e.target;
    const newCrew = [...form.crew];
    if(name==='imageFile') newCrew[index][name]=files[0];
    else newCrew[index][name]=value;
    setForm(f=>({...f, crew:newCrew}));
  };

  const addCast = () => setForm(f => ({ ...f, cast: [...f.cast, { name: '', imageFile: null }] }));
  const removeCast = i => { if(form.cast.length>1) setForm(f=>({...f, cast:f.cast.filter((_,idx)=>idx!==i)})); };

  const addCrew = () => setForm(f => ({ ...f, crew: [...f.crew, { name: '', role: '', imageFile: null }] }));
  const removeCrew = i => { if(form.crew.length>1) setForm(f=>({...f, crew:f.crew.filter((_,idx)=>idx!==i)})); };

  // Theater & Screens
  const handleTheaterChange = (tIndex, field, value) => {
    const theaters = [...form.theaters];
    theaters[tIndex][field] = value;
    setForm(f=>({...f, theaters}));
  };

  const handleScreenChange = (tIndex, sIndex, field, value) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens[sIndex][field] = value;
    setForm(f=>({...f, theaters}));
  };

  const handleShowTimeChange = (tIndex, sIndex, selected) => {
    const theaters = [...form.theaters];
    theaters[tIndex].screens[sIndex].showTimes = selected;
    setForm(f=>({...f, theaters}));
  };

  const addTheater = () => setForm(f => ({ ...f, theaters: [...f.theaters, { name: '', screens: [{ screenName: '', showTimes: [] }] }] }));
  const removeTheater = tIndex => setForm(f => ({ ...f, theaters: f.theaters.filter((_,i)=>i!==tIndex) }));
  const addScreen = tIndex => {
    const theaters=[...form.theaters];
    theaters[tIndex].screens.push({ screenName:'', showTimes:[] });
    setForm(f=>({...f, theaters}));
  };
  const removeScreen = (tIndex,sIndex) => {
    const theaters=[...form.theaters];
    theaters[tIndex].screens=theaters[tIndex].screens.filter((_,i)=>i!==sIndex);
    setForm(f=>({...f, theaters}));
  };

  // Type & Price
  const handleTypePriceChange = (index, field, selected) => {
    const arr = [...form.typePrice];
    arr[index][field] = selected;
    setForm(f=>({...f, typePrice:arr}));
  };

  const addTypePrice = () => setForm(f => ({ ...f, typePrice: [...f.typePrice, { type: [], price: [] }] }));
  const removeTypePrice = i => { if(form.typePrice.length>1) setForm(f=>({...f, typePrice:form.typePrice.filter((_,idx)=>idx!==i)})); };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if(!form.name.trim()) newErrors.name='Movie name is required';
    if(!form.duration.trim()) newErrors.duration='Duration is required';
    if(!form.releaseDate.trim()) newErrors.releaseDate='Release date is required';
    if(!form.rating || form.rating<0 || form.rating>10) newErrors.rating='Rating must be 0-10';
    if(!form.description.trim()) newErrors.description='Description is required';
    if(!form.imageUrl) newErrors.imageUrl='Poster image required';
    
    form.cast.forEach((c,i)=> {
      if(!c.name.trim()) newErrors[`cast-name-${i}`]='Cast name required';
    });

    form.crew.forEach((c,i)=>{
      if(!c.name.trim()) newErrors[`crew-name-${i}`]='Crew name required';
      if(!c.role.trim()) newErrors[`crew-role-${i}`]='Crew role required';
    });

    form.theaters.forEach((t,tIndex)=>{
      if(!t.name.trim()) newErrors[`theater-${tIndex}`]='Theater name required';
      t.screens.forEach((s,sIndex)=>{
        if(!s.screenName.trim()) newErrors[`screen-${tIndex}-${sIndex}`]='Screen name required';
        if(!s.showTimes.length) newErrors[`showtime-${tIndex}-${sIndex}`]='Select at least one showtime';
      });
    });

    form.typePrice.forEach((tp, i)=>{
      if(!tp.type.length) newErrors[`type-${i}`]='Select at least one type';
      if(!tp.price.length) newErrors[`price-${i}`]='Select at least one price';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  //New Submit 
  const submit = async e => {
  e.preventDefault();
  if (!validateForm()) return;

  try {
    // Convert cast/crew image files to base64
    const castWithBase64 = await Promise.all(
      form.cast.map(async (c) => ({
        ...c,
        imageFile: c.imageFile ? await toBase64(c.imageFile) : '',
      }))
    );

    const crewWithBase64 = await Promise.all(
      form.crew.map(async (c) => ({
        ...c,
        imageFile: c.imageFile ? await toBase64(c.imageFile) : '',
      }))
    );

    const payload = {
      ...form,
      cast: castWithBase64,
      crew: crewWithBase64,
      genre: form.genre.map(g => g.value),
      language: form.language.map(l => l.value),
      certificate: form.certificate.map(c => c.value),
      theaters: form.theaters.map(t => ({
        ...t,
        screens: t.screens.map(s => ({
          ...s,
          showTimes: s.showTimes.map(st => st.value)
        }))
      })),
      typePrice: form.typePrice.map(tp => ({
        type: tp.type.map(t => t.value),
        price: tp.price.map(p => p.value)
      }))
    };

    const url = editIndex
      ? `http://localhost:5000/api/movies/${editIndex}`
      : 'http://localhost:5000/api/movies';
    const method = editIndex ? 'PUT' : 'POST';

    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Failed to save movie');
    }

    clearForm();
    navigate('/managemovie');
  } catch (err) {
    console.error(err);
    alert('Failed to save movie');
  }
};


  const clearForm = () => {
    setForm(empty);
    setPosterPreview('');
    setErrors({});
    setEditIndex(null);
  };

  const OpenSidebar = () => setOpenSidebarToggle(!openSidebarToggle);

  return (
    <>
      <Adminheader />
      <div className="sideside">
        <Adminsidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      </div>

      <div className="movie">
        <h5 className="text-danger fw-bold mt-2">Movie</h5> &nbsp; &nbsp;
        <span className="mt-2">{menuName}</span>
      </div>

      <Container className="py-4 px-4 bg-white shadow-sm" style={{ maxWidth:'947px', marginTop:'130px', marginLeft:'288px', marginBottom:'10px', fontFamily:'Arial, sans-serif', borderRadius:'8px'}}>
        <h3 className="mb-4 text-danger">{editIndex!==null?'Edit Movie':'Create New Movie'}</h3>
        <Form onSubmit={submit} noValidate>
          <Row className="g-3">

            {/* Movie Name */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Movie Name <span className="text-danger">*</span></Form.Label>
                <Form.Control name="name" type="text" value={form.name} onChange={handleChange} isInvalid={!!errors.name}/>
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Genre */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Select isMulti options={genreOptions} value={form.genre} onChange={selected=>handleMultiSelectChange('genre',selected)} />
              </Form.Group>
            </Col>

            {/* Language */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Language</Form.Label>
                <Select isMulti options={languageOptions} value={form.language} onChange={selected=>handleMultiSelectChange('language',selected)} />
              </Form.Group>
            </Col>

            {/* Certificate */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Certificate</Form.Label>
                <Select isMulti options={certificateOptions} value={form.certificate} onChange={selected=>handleMultiSelectChange('certificate',selected)} />
              </Form.Group>
            </Col>

            {/* Duration */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Duration <span className="text-danger">*</span></Form.Label>
                <Form.Control name="duration" type="text" value={form.duration} onChange={handleChange} isInvalid={!!errors.duration}/>
                <Form.Control.Feedback type="invalid">{errors.duration}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Rating */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Rating <span className="text-danger">*</span></Form.Label>
                <Form.Control name="rating" type="number" min={0} max={10} step={0.1} value={form.rating} onChange={handleChange} isInvalid={!!errors.rating}/>
                <Form.Control.Feedback type="invalid">{errors.rating}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Format */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Format</Form.Label>
                <Form.Select name="format" value={form.format} onChange={handleChange}>
                  <option>2D</option>
                  <option>3D</option>
                  <option>IMAX 3D</option>
                  <option>MX 4D 3D</option>
                  <option>IMAX 2D</option>
                  <option>4DX 3D</option>
                  <option>3D SCREEN X</option>
                  <option>ICE</option>
                  <option>ICE 3D</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Release Date */}
            <Col md={6}>
              <Form.Group>
                <Form.Label>Release Date <span className="text-danger">*</span></Form.Label>
                <Form.Control name="releaseDate" type="date" value={form.releaseDate} onChange={handleChange} isInvalid={!!errors.releaseDate}/>
                <Form.Control.Feedback type="invalid">{errors.releaseDate}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Description */}
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Description <span className="text-danger">*</span></Form.Label>
                <Form.Control name="description" as="textarea" rows={3} value={form.description} onChange={handleChange} isInvalid={!!errors.description}/>
                <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            {/* Cast Section */}
            <Col xs={12}>
              <hr /><h5 className="mb-3 text-secondary">Cast</h5>
              {form.cast.map((c,i)=>(
                <Row key={i} className="align-items-center mb-2">
                  <Col md={5}>
                    <Form.Control name="name" type="text" value={c.name} onChange={e=>handleCastChange(i,e)} placeholder="Cast member name" isInvalid={!!errors[`cast-name-${i}`]}/>
                    <Form.Control.Feedback type="invalid">{errors[`cast-name-${i}`]}</Form.Control.Feedback>
                  </Col>
                  <Col md={5}>
                    <Form.Control name="imageFile" type="file" onChange={e=>handleCastChange(i,e)} />
                  </Col>
                  <Col md={2}>
                    <Button variant="outline-danger" size="sm" onClick={()=>removeCast(i)} disabled={form.cast.length===1}>Remove</Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addCast}>Add Cast</Button>
            </Col>

            {/* Crew Section */}
            <Col xs={12}>
              <hr /><h5 className="mb-3 text-secondary">Crew</h5>
              {form.crew.map((c,i)=>(
                <Row key={i} className="align-items-center mb-2">
                  <Col md={4}>
                    <Form.Control name="name" type="text" value={c.name} onChange={e=>handleCrewChange(i,e)} placeholder="Crew name" isInvalid={!!errors[`crew-name-${i}`]} />
                    <Form.Control.Feedback type="invalid">{errors[`crew-name-${i}`]}</Form.Control.Feedback>
                  </Col>
                  <Col md={4}>
                    <Form.Control name="role" type="text" value={c.role} onChange={e=>handleCrewChange(i,e)} placeholder="Role" isInvalid={!!errors[`crew-role-${i}`]} />
                    <Form.Control.Feedback type="invalid">{errors[`crew-role-${i}`]}</Form.Control.Feedback>
                  </Col>
                  <Col md={3}>
                    <Form.Control name="imageFile" type="file" onChange={e=>handleCrewChange(i,e)} />
                  </Col>
                  <Col md={1}>
                    <Button variant="outline-danger" size="sm" onClick={()=>removeCrew(i)} disabled={form.crew.length===1}>Remove</Button>
                  </Col>
                </Row>
              ))}
              <Button variant="outline-primary" size="sm" onClick={addCrew}>Add Crew</Button>
            </Col>

            {/* Poster Upload */}
            <Col md={12}>
              <hr />
              <Form.Group>
                <Form.Label>Upload Poster Image <span className="text-danger">*</span></Form.Label>
                <Form.Control type="file" accept="image/*" onChange={handlePosterChange} isInvalid={!!errors.imageUrl}/>
                <Form.Control.Feedback type="invalid">{errors.imageUrl}</Form.Control.Feedback>
                {posterPreview && <img src={posterPreview} alt="Poster Preview" style={{marginTop:'10px', width:'100%', maxHeight:'400px', objectFit:'cover'}} />}
              </Form.Group>
            </Col>

            {/* Theater & Screens */}
            <Col xs={12}>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-secondary">Theaters and Showtimes</h5>
                <Button variant="outline-primary" size="sm" onClick={addTheater}>+ Add New Theater</Button>
              </div>
            </Col>

            {form.theaters.map((theater,tIndex)=>(
              <Col xs={12} key={tIndex} className="border p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6>Theater {tIndex+1}</h6>
                  {form.theaters.length>1 && <Button variant="outline-danger" size="sm" onClick={()=>removeTheater(tIndex)}>Remove Theater</Button>}
                </div>

                <Form.Group className="mb-3">
                  <Form.Label>Theater Name <span className="text-danger">*</span></Form.Label>
                  <Form.Control value={theater.name} onChange={(e)=>handleTheaterChange(tIndex,'name',e.target.value)} isInvalid={!!errors[`theater-${tIndex}`]}/>
                  <Form.Control.Feedback type="invalid">{errors[`theater-${tIndex}`]}</Form.Control.Feedback>
                </Form.Group>

                {theater.screens.map((screen,sIndex)=>(
                  <Row key={sIndex} className="align-items-end mb-3">
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Screen Name <span className="text-danger">*</span></Form.Label>
                        <Form.Control value={screen.screenName} onChange={(e)=>handleScreenChange(tIndex,sIndex,'screenName',e.target.value)} isInvalid={!!errors[`screen-${tIndex}-${sIndex}`]}/>
                        <Form.Control.Feedback type="invalid">{errors[`screen-${tIndex}-${sIndex}`]}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Show Timings <span className="text-danger">*</span></Form.Label>
                        <Select isMulti options={showTimeOptions} value={screen.showTimes} onChange={selected=>handleShowTimeChange(tIndex,sIndex,selected)} />
                        {errors[`showtime-${tIndex}-${sIndex}`] && <div className="text-danger">{errors[`showtime-${tIndex}-${sIndex}`]}</div>}
                      </Form.Group>
                    </Col>
                    <Col md={2} className="d-flex">
                      <Button variant="outline-primary" size="sm" className="me-2" onClick={()=>addScreen(tIndex)}>+ Add</Button>
                      {theater.screens.length>1 && <Button variant="outline-danger" size="sm" onClick={()=>removeScreen(tIndex,sIndex)}>Remove</Button>}
                    </Col>
                  </Row>
                ))}
              </Col>
            ))}

            {/* Type & Price */}
            <Col xs={12}>
              <hr />
              <h5 className="text-secondary mb-3">Type & Price</h5>
              {form.typePrice.map((tp,index)=>(
                <Row key={index} className="align-items-center mb-2">
                  <Col md={5}>
                    <Form.Label>Type <span className="text-danger">*</span></Form.Label>
                    <Select isMulti options={typeOptions} value={tp.type} onChange={selected=>handleTypePriceChange(index,'type',selected)} />
                    {errors[`type-${index}`] && <div className="text-danger">{errors[`type-${index}`]}</div>}
                  </Col>
                  <Col md={5}>
                    <Form.Label>Price <span className="text-danger">*</span></Form.Label>
                    <Select isMulti options={priceOptions} value={tp.price} onChange={selected=>handleTypePriceChange(index,'price',selected)} />
                    {errors[`price-${index}`] && <div className="text-danger">{errors[`price-${index}`]}</div>}
                  </Col>
                  <Col md={2} className="d-flex align-items-end">
                    <Button variant="outline-primary" size="sm" className="me-2" onClick={addTypePrice}>+ Add</Button>
                    {form.typePrice.length>1 && <Button variant="outline-danger" size="sm" onClick={()=>removeTypePrice(index)}>Remove</Button>}
                  </Col>
                </Row>
              ))}
            </Col>

            {/* Submit */}
            <Col xs={12} className="text-end mt-4">
              <Button variant="transparent" className='clear' onClick={clearForm}>Clear</Button>
              <Button type="submit" className="me-2 create" variant="danger">{editIndex!==null?'Update':'Create'}</Button>
            </Col>

          </Row>
        </Form>
      </Container>
    </>
  );
};

export default MovieManager;

