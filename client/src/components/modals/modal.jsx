/**
 * Mostrar resultado de la request
 * Este modal esta hecho para mostrar el resultado de la request por lo tanto se invocara a partir de una funcion en el try catch
 * Como usarlo?
 * - importalo: 
 * import Modal from '../../components/modals/modal'
 * - crea una constante con useRef:  
 * const modal = React.useRef()
 * - en el render crea el componente con ref:
 * <Modal ref={modal}/>
 * - ejecuta la funcion para renderizarlo con sus params
 * modal.current.open({
    title: "Error", 
    text: "Algo falló", 
    textBlack: "¡Y no sabemos qué!",
    severity: "error"
  })
 * 
 */
  import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
  import { createPortal } from 'react-dom'
  import {
    Backdrop,
    Box,
    Modal as ModalUI,
    Fade,
    AlertTitle,
    Alert,
  } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import IconButton from '@mui/material/IconButton';
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    p: 4,
  };
  
  const modalElement = document.getElementById('modal-root')
  
  export function Modal(
    {
      children,
      fade = false,
      defaultOpened = false,
    },
    ref) {
    const [isOpen, setIsOpen] = useState(defaultOpened)
    const [data, setData] = useState({
      title: "Error", 
      text: "Algo falló", 
      textBlack: "",
      severity: "error",
    })
  
    const close = useCallback(() => setIsOpen(false), [])
  
    useImperativeHandle(ref, () => ({
      open: (newData) => {setData({...data,...newData});setIsOpen(true)},
      close
    }), [close, data])
  
    const handleEscape = useCallback(event => {
      if (event.keyCode === 27) close()
    }, [close])
  
    useEffect(() => {
      if (isOpen) document.addEventListener('keydown', handleEscape, false)
      return () => {
        document.removeEventListener('keydown', handleEscape, false)
      }
    }, [handleEscape, isOpen])
  
    return createPortal(
      isOpen ? (
        <div>
        <ModalUI
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={isOpen}
          onClose={close}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isOpen}>
            <Box sx={style}>
              <Alert 
              severity={data.severity}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    close();
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              >
                <AlertTitle>{data.title}</AlertTitle>
                {data.text} — <strong>{data.textBlack}</strong>
              </Alert>
            </Box>
          </Fade>
        </ModalUI>
      </div>
      ) : null,
      modalElement
    )
  }
  
  export default forwardRef(Modal)