import { Component, OnInit } from '@angular/core';

import { Superhero } from './superhero';
import { SuperHeroService } from './superhero.service';

@Component({
    selector: 'my-photogalary',
    templateUrl: './photo-galary.component.html'
})
export class PhotogalaryComponent implements OnInit {
    selectedImage = 'http://www.stellarium.org/img/screenshots/placeholder.png';
    selectedName = '';
    superpower = '';
    superheros: Superhero[] = [];

    constructor(private superHeroService: SuperHeroService) {
        
    }

    ngOnInit(): void {
        this.superHeroService.getSuperheroes()
            .then(superheros => this.superheros = superheros);
            
    }

    onImageClick(superhero): void {
        console.log(this.superheros);
        this.selectedImage = superhero.picture;
        this.selectedName = superhero.name;
        this.superpower = superhero.superpower;
    }
}