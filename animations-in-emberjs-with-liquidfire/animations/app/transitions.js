// app/transitions.js
export default function(){
  this.transition(
    this.fromRoute('band.song'),
    this.toRoute('band.details'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}