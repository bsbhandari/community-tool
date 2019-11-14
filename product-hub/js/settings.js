
$(document).ready(() => {
  var $ = jQuery;

  $('#add').click(function (e) {
    save();
    reset();
  });

  $('#reset').click(function (e) {
    reset();
  });


  var reset = () => {
    $('#title').val('');
    $('#description').val('');
    $('#category').val('');
    $('#reference-link').val('');
  }

  let save = ()=>{
    const payload =   {

    };

    $.post('', payload).then((res)=>{

    }).catch((res)=>{
      
    });
  }

  let categoryHtml = '';
  for (let i = 0; i < categories.length; i++) {
    categoryHtml += `<option value="${categories[i].value}">${categories[i].label}</option>`
  }
  $('#category').append(categoryHtml);

});


var categories = [
  {
    "label": "General",
    "value": "General"
  },
  {
    "label": "CDP",
    "value": "CDP"
  },
  {
    "label": "Cockpit",
    "value": "Cockpit"
  },
  {
    "label": "Connectors",
    "value": "Connectors"
  },
  {
    "label": "Customer Experience(CX)",
    "value": "Customer Experience(CX)"
  },
  {
    "label": "Data Management",
    "value": "Data Management"
  },
  {
    "label": "GSAssist",
    "value": "GSAssist"
  },
  {
    "label": "JO - program",
    "value": "JO - program"
  },
  {
    "label": "JO - email infra",
    "value": "JO - email infra"
  },
  {
    "label": "Person",
    "value": "Person"
  },
  {
    "label": "Product Experience(PX)",
    "value": "Product Experience(PX)"
  },
  {
    "label": "Renewal Center",
    "value": "Renewal Center"
  },
  {
    "label": "Rules",
    "value": "Rules"
  },
  {
    "label": "Sally",
    "value": "Sally"
  },
  {
    "label": "Scorecards",
    "value": "Scorecards"
  },
  {
    "label": "Success Plans",
    "value": "Success Plans"
  },
  {
    "label": "Tenant Management",
    "value": "Tenant Management"
  },
  {
    "label": "Timeline",
    "value": "Timeline"
  },
  {
    "label": "User",
    "value": "User"
  }
];
