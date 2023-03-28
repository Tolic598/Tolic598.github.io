// function user_1() {
//     if (document.getElementById("tb1").checked) {
//         document.getElementById("tbnum_1").disabled = false;
//     }
//     else {
//         document.getElementById("tbnum_1").disabled = true;
//     }
// }
// window.onload = user_1;

// function user_2() {
//     if (document.getElementById("tb2").checked) {
//         document.getElementById("tbnum_2").disabled = false;
//     }
//     else {
//         document.getElementById("tbnum_2").disabled = true;
//     }
// }
// window.onload = user_2;

// function user_3() {
//     if (document.getElementById("tb3").checked) {
//         document.getElementById("tbnum_3").disabled = false;
//     }
//     else {
//         document.getElementById("tbnum_3").disabled = true;
//     }
// }
// window.onload = user_3;

// function user_4() {
//     if (document.getElementById("tb4").checked) {
//         document.getElementById("tbnum_4").disabled = false;
//     }
//     else {
//         document.getElementById("tbnum_4").disabled = true;
//     }
// }
// window.onload = user_4;

$(".st_1").click(function(){
    $(".option").toggle('show')
})

$('.editor').click(function() {	
	let $this = $(this);
  let isEditing = $this.hasClass('editing');
 
  if (!isEditing) {
  	let val = $this.html();
  
    let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
    $input.blur(function() {
    	let $this = $(this);
      let val = $this.val();
      $this.closest('.editor').html(val).removeClass('editing');
    })
    $input.val(val);
    $this.html($input);
    $input.focus();
  }
  $this.addClass('editing');
});

$(".st_2").click(function(){
  $(".option_2").toggle('show')
})

$('.editor_2').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_2');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_2').html(val).removeClass('editing_2');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_2');
});

$(".st_3").click(function(){
  $(".option_3").toggle('show')
})

$('.editor_3').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_3');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_3').html(val).removeClass('editing_3');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_3');
});

$(".st_4").click(function(){
  $(".option_4").toggle('show')
})

$('.editor_4').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_4');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_4').html(val).removeClass('editing_4');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_4');
});

$(".st_5").click(function(){
  $(".option_5").toggle('show')
})

$('.editor_5').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_5');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_5').html(val).removeClass('editing_5');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_5');
});

$(".st_6").click(function(){
  $(".option_6").toggle('show')
})

$('.editor_6').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_6');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_6').html(val).removeClass('editing_6');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_6');
});

$(".st_7").click(function(){
  $(".option_7").toggle('show')
})

$('.editor_7').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_7');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_7').html(val).removeClass('editing_7');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_7');
});

$(".st_8").click(function(){
  $(".option_8").toggle('show')
})

$('.editor_8').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_8');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_8').html(val).removeClass('editing_8');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_8');
});

$(".st_9").click(function(){
  $(".option_9").toggle('show')
})

$('.editor_9').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_9');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_9').html(val).removeClass('editing_9');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_9');
});


$(".st_10").click(function(){
  $(".option_10").toggle('show')
})

$('.editor_10').click(function() {	
let $this = $(this);
let isEditing = $this.hasClass('editing_10');

if (!isEditing) {
  let val = $this.html();

  let $input = $('<textarea class="editor-input" id="story" name="story" rows="24" cols="41"></textarea>');
  $input.blur(function() {
    let $this = $(this);
    let val = $this.val();
    $this.closest('.editor_10').html(val).removeClass('editing_10');
  })
  $input.val(val);
  $this.html($input);
  $input.focus();
}
$this.addClass('editing_10');
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
  
    let $input = $('<input type="text" class="editor-input">');
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

