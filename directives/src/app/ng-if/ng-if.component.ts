import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styles: []
})
export class NgIfComponent implements OnInit {

  public paragraphe1: string = "Je suis le paragraphe 1 - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eos aliquam expedita reprehenderit voluptatum cumque aliquid dignissimos iusto provident. Delectus eaque exercitationem perferendis! Accusantium, ea!";

  public paragraphe2: string = "Je suis le paragraphe 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur vel, alias amet quaerat tempora neque perspiciatis sint impedit est magni nisi itaque necessitatibus quam dignissimos, voluptates quo illo cumque eveniet odio. Quae eaque eius placeat aspernatur deleniti veritatis, tempore nisi tenetur est amet magnam laborum officiis. Aliquid amet inventore aut commodi perspiciatis. Temporibus suscipit atque at dolor beatae, eligendi dignissimos quae corporis autem? Ducimus dicta illum quidem expedita blanditiis mollitia quod, pariatur placeat vero.";

  public display: boolean = true;

  ngOnInit() {
  }

}
