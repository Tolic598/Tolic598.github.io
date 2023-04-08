

$(".st_1").click(function(){
    $(".option").toggle('show')
})

let field = document.getElementById("story");

if (sessionStorage.getItem("autosave")) {
  field.value = sessionStorage.getItem("autosave");
}

field.addEventListener("change", () => {
  sessionStorage.setItem("autosave", field.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })

}); 


$(".st_2").click(function(){
  $(".option_2").toggle('show_1')
})

let field_1 = document.getElementById("story_1");

if (sessionStorage.getItem("autosave_1")) {
  field_1.value = sessionStorage.getItem("autosave_1");
}

field_1.addEventListener("change", () => {
  sessionStorage.setItem("autosave_1", field_1.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
}); 

$(".st_3").click(function(){
  $(".option_3").toggle('show')
})

let field_2 = document.getElementById("story_2");

if (sessionStorage.getItem("autosave_2")) {
  field_2.value = sessionStorage.getItem("autosave_2");
}

field_2.addEventListener("change", () => {
  sessionStorage.setItem("autosave_2", field_2.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_4").click(function(){
  $(".option_4").toggle('show')
})

let field_3 = document.getElementById("story_3");

if (sessionStorage.getItem("autosave_3")) {
  field_3.value = sessionStorage.getItem("autosave_3");
}

field_3.addEventListener("change", () => {
  sessionStorage.setItem("autosave_3", field_3.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_5").click(function(){
  $(".option_5").toggle('show')
})

let field_4 = document.getElementById("story_4");

if (sessionStorage.getItem("autosave_4")) {
  field_4.value = sessionStorage.getItem("autosave_4");
}

field_4.addEventListener("change", () => {
  sessionStorage.setItem("autosave_4", field_4.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_6").click(function(){
  $(".option_6").toggle('show')
})

let field_5 = document.getElementById("story_5");

if (sessionStorage.getItem("autosave_5")) {
  field_5.value = sessionStorage.getItem("autosave_5");
}

field_5.addEventListener("change", () => {
  sessionStorage.setItem("autosave_5", field_5.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_7").click(function(){
  $(".option_7").toggle('show')
})

let field_6 = document.getElementById("story_6");

if (sessionStorage.getItem("autosave_6")) {
  field_6.value = sessionStorage.getItem("autosave_6");
}

field_6.addEventListener("change", () => {
  sessionStorage.setItem("autosave_6", field_6.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_8").click(function(){
  $(".option_8").toggle('show')
})

let field_7 = document.getElementById("story_7");

if (sessionStorage.getItem("autosave_7")) {
  field_7.value = sessionStorage.getItem("autosave_7");
}

field_7.addEventListener("change", () => {
  sessionStorage.setItem("autosave_7", field_7.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_9").click(function(){
  $(".option_9").toggle('show')
})

let field_8 = document.getElementById("story_8");

if (sessionStorage.getItem("autosave_8")) {
  field_8.value = sessionStorage.getItem("autosave_8");
}

field_8.addEventListener("change", () => {
  sessionStorage.setItem("autosave_8", field_8.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

$(".st_10").click(function(){
  $(".option_10").toggle('show')
})

let field_9 = document.getElementById("story_9");

if (sessionStorage.getItem("autosave_9")) {
  field_9.value = sessionStorage.getItem("autosave_9");
}

field_9.addEventListener("change", () => {
  sessionStorage.setItem("autosave_9", field_5.value);
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('textarea, input').forEach(function(e) {
      if(e.value === '') e.value = window.sessionStorage.getItem(e.name, e.value);
      e.addEventListener('input', function() {
          window.sessionStorage.setItem(e.name, e.value);
      })
  })
});

// имена
$('.nams1').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('nams_1');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="editor-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.nams_1').html(val).removeClass('nams_1');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('nams_1');
});


$('.nams2').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('nams_2');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="editor-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.nams_2').html(val).removeClass('nams_2');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('nams_2');
});

$('.nams3').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('nams_3');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="editor-input">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.nams_3').html(val).removeClass('nams_3');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('nams_3');
});

$('.nams4').click(function() {	
  let $this = $(this);
  let isEditing = $this.hasClass('nams_4');
  
  if (!isEditing) {
    let val = $this.html();
  
    let $input = $('<input type="text" class="editor-input" id="simpleEdit">');
    $input.blur(function() {
      let $this = $(this);
      let val = $this.val();
      $this.closest('.nams_4').html(val).removeClass('nams_4');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('nams_4');
});