ventana . addEventListener ( ' load ' , function () {
  var sectionBoards =  documento . getElementById ( ' boards ' );
  var inputBoard =  documento . getElementById ( ' input-board ' );
  var paragraph =  inputBoard . firstElementChild ;
  párrafo . addEventListener ( ' click ' , function () {
    inputBoard . removeChild (párrafo);
    inputBoard . ClassList . add ( ' input-board-js ' );

    var newList =  documento . createElement ( ' entrada ' );
    nuevaLista . ClassList . add ( ' nueva lista ' );
    nuevaLista . setAttribute ( ' placeholder ' , ' Añadir una lista ... ' );
    inputBoard . appendChild (newList);

    var btnSave =  document . createElement ( ' botón ' );
    btnGuardar . textContent  =  ' Guardar ' ;
    btnGuardar . ClassList . add ( ' btn-green ' );
    inputBoard . appendChild (btnSave);
    btnGuardar . addEventListener ( ' click ' , function () {
    inputBoard . removeChild (newList);

      var nameList =  documento . createElement ( ' p ' );
      nameList . textContent  =  newList . valor ;
      nameList . ClassList . add ( ' nombre-lista-js ' );
      inputBoard . appendChild ( nameList );

      var addTask =  documento . createElement ( ' a ' );
      addTask . textContent  =  ' Añadir una tarea ... ' ;
      addTask . ClassList . add ( ' add-task-js ' );
      inputBoard . appendChild (addTask);
      inputBoard . removeChild (btnSave);
      addTask . addEventListener ( ' click ' , function () {
        inputBoard . removeChild (addTask);

        var taskInput =  document . createElement ( ' textarea ' );
        taskInput . ClassList . add ( ' tarea-entrada-js ' );
        taskInput . setAttribute ( ' filas ' , 3 );
        inputBoard . appendChild (taskInput)

        var btnAdd =  documento . createElement ( ' botón ' );
        btnAñadir . textContent  =  ' Añadir ' ;
        btnAñadir . ClassList . add ( ' btn-green ' );
        inputBoard . appendChild (btnAdd);
        taskInput . focus ();
        btnAñadir . addEventListener ( ' click ' , function () {

          var taskBox =  documento . createElement ( ' div ' );
          TaskBox . ClassList . add ( ' task-box-js ' );
          var task =  document . createElement ( ' span ' );
          tarea . textContent  =  taskInput . valor ;
          TaskBox . appendChild (tarea);
          inputBoard . insertBefore (taskBox, taskInput);
          taskInput . value  =  ' ' ;
          taskInput . focus ();
        });
      });
    });
  });
});
