import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-minafdeling',
  imports: [FormsModule, CommonModule,RouterLink],
  templateUrl: './minafdeling.html',
  styleUrl: './minafdeling.css',
})
export class Minafdeling {
searchText = signal('');

// Minta adatok az eredeti fsb oldal alapján
  departments = [
    {
      name: 'Ejendomskontoret Vesterbro',
      address: 'Dannebrogsgade 36, kld',
      phone: '99887766',
      email: 'vesterbro@fsb.dk',
      telefontid: 'man-tors 11-11.30',
      opening: 'man-tors 11-11.30'
    },
    {
      name: 'Ejendomskontoret 1',
      address: 'vej 1',
      phone: '77665544',
      email: 'oesterbro@fsb.dk',
      telefontid: 'man-fre 09-10.00',
      opening: 'tir-tors 10-12.00'
    },
    {
      name: 'Ejendomskontoret 2',
      address: 'vej 2',
      phone: '11223344',
      email: 'sample@fsb.dk',
      telefontid: 'man-fre 08-09.30',
      opening: 'man-ons 13-15.00'
    },
    {
      name: 'Ejendomskontoret 3',
      address: 'vej 3',
      phone: '583585858',
      email: 'dommerparken@fsb.dk',
      telefontid: 'man-fre 10-12',
      opening: 'man-ons 07:30-09.00'
    }
    ,
    {
      name: 'Ejendomskontoret 4',
      address: 'vej 4',
      phone: '565432165',
      email: 'sample@fsb.dk',
      telefontid: 'man-fre 10-12',
      opening: 'man-ons 07:30-09.00'
    }
    ,
    {
      name: 'Ejendomskontoret 5',
      address: 'vej 5',
      phone: '88776655',
      email: 'sample@fsb.dk',
      telefontid: 'man-fre 10-12',
      opening: 'man-ons 07:30-09.00'
    }
    ,
    {
      name: 'Ejendomskontoret 6',
      address: 'vej 6',
      phone: '583585858',
      email: 'sample@fsb.dk',
      telefontid: 'man-fre 10-12',
      opening: 'man-ons 07:30-09.00'
    }
  ];

// Reaktív szűrés Signallal
  filteredDepartments = computed(() => {
    const filter = this.searchText().toLowerCase();
    return this.departments.filter(dept => 
      dept.name.toLowerCase().includes(filter) || 
      dept.address.toLowerCase().includes(filter)||
      dept.phone.toLowerCase().includes(filter)
    );
  });

}
