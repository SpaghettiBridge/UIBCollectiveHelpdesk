var urgency_score = 0,
  importance_score = 0;

switch ({{ui.slct_createTick_urgency2.value}}) {
  case 'High':
    urgency_score = 7;
    break;
  case 'Medium':
    urgency_score = 5;
    break;
  case 'Low':
    urgency_score = 3;
    break;
  default:
    urgency_score = 0;
}

switch ({{ui.slct_createTick_importancy2.value}}) {
  case 'High':
    importance_score = 7;
    break;
  case 'Medium':
    importance_score = 5;
    break;
  case 'Low':
    importance_score = 3;
    break;
  default:
    importance_score = 0;
}
switch (importance_score + urgency_score) {
  case 14:
    return 'High';
  case 12:
    return 'High';
  case 10:
    return 'Medium';
  case 8:
    return 'Medium';
  case 6:
    return 'Low';
  case 3:
    return 'Low';
  case 0:
    return 'Very Low';
  default:
    return 'Very Low';
}