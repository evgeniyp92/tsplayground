// instructions to every other class on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // marking this as private makes it so nobody can access methods but us
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divID) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  public addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi there',
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
