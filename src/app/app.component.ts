import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test CRUD';
  datas;
  editId;
  editMode = false;
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  myForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit() {
    //List
    var authToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYjY1YmJkNmQ1NzEyZThhMGU0MTU3ZWJjNmZhZDVlODdlNzZkZDIyM2MyZDc1Y2Q0ZTkzZTgwNjNhYTQ4ZWYxOWE5ODg3NTM4MWM4ODViIn0.eyJhdWQiOiIxIiwianRpIjoiN2ZiNjViYmQ2ZDU3MTJlOGEwZTQxNTdlYmM2ZmFkNWU4N2U3NmRkMjIzYzJkNzVjZDRlOTNlODA2M2FhNDhlZjE5YTk4ODc1MzgxYzg4NWIiLCJpYXQiOjE2MDQxNDU3MTIsIm5iZiI6MTYwNDE0NTcxMiwiZXhwIjoxNjM1NjgxNzEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jLlI4delVOpjad3Xmy2lTfaG5X2eO0e3yIKQSJpolbvDnmTxXyF9GTGt-VtLDEXn8fRGk5EhuqjKtur9BrXDhFlP3dQOqtXqDCzY8ONGUiX8cWdik3jQgzff2KwWYcpNTjH_JyDcgq_CWlUUVXMGOVWrJxf9pA_Z7za-9wKsJWT4GG1n9-XaNvdjYwX_YhjZzzJfiCVZNQggmchmW4o92ynXp3ZTDV1RjteYXbJj7WOzLmbSe78XkaENT7bNXDFbqyx7YlaIGw--SK9NtrYbra92aXc9Kqc1Pe_jumYf-XdUF_bCThln-dA-8jRcTxxgbmhabu4JekA8J4maXyHHh9H4CPCDlo36V7IHMLGn4y4YN1CUQHLngyAn_7TbACxJ5wSlDUO2UTqgAWQkceq8yRmQJ1kEd_SdjcbKcB66OlOev-ZKVpxolKV8XW0X46aLg1izr10eECgI86MFIfA0x7BMiTxFfPMQgs-DERoIbYf35y2tcNYqc-zbSxhe5bXHY1pbJw3bDVAklXM0Me9a7HlTbZrs9LhZvL9vwOIcHcj4xkR_htD8oe5v-vYmD_pRZwG0hMd0wHm1JaeRa1So08_L-HCPdudQCjKQlx3Q_gmw-NFET2wH39CYbyPPNII1NKbM9zlYs8rAD6_Kkr-3U8BluHYt0EJXb7HESjhjSOc';
    var auth = `Bearer ${authToken}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', auth);
    this.http
      .get('https://v2-dev-api.isorobot.io/api/v1/organization-policies', {
        headers,
      })
      .subscribe((res: any) => {
        (this.datas = res.data),
          (error) => {
            console.log(error);
          };
      });
  }

  //Create
  onCreate(form) {
    const body = form.value;
    body.organization_id = 1;
    console.log(body);
    var authToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYjY1YmJkNmQ1NzEyZThhMGU0MTU3ZWJjNmZhZDVlODdlNzZkZDIyM2MyZDc1Y2Q0ZTkzZTgwNjNhYTQ4ZWYxOWE5ODg3NTM4MWM4ODViIn0.eyJhdWQiOiIxIiwianRpIjoiN2ZiNjViYmQ2ZDU3MTJlOGEwZTQxNTdlYmM2ZmFkNWU4N2U3NmRkMjIzYzJkNzVjZDRlOTNlODA2M2FhNDhlZjE5YTk4ODc1MzgxYzg4NWIiLCJpYXQiOjE2MDQxNDU3MTIsIm5iZiI6MTYwNDE0NTcxMiwiZXhwIjoxNjM1NjgxNzEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jLlI4delVOpjad3Xmy2lTfaG5X2eO0e3yIKQSJpolbvDnmTxXyF9GTGt-VtLDEXn8fRGk5EhuqjKtur9BrXDhFlP3dQOqtXqDCzY8ONGUiX8cWdik3jQgzff2KwWYcpNTjH_JyDcgq_CWlUUVXMGOVWrJxf9pA_Z7za-9wKsJWT4GG1n9-XaNvdjYwX_YhjZzzJfiCVZNQggmchmW4o92ynXp3ZTDV1RjteYXbJj7WOzLmbSe78XkaENT7bNXDFbqyx7YlaIGw--SK9NtrYbra92aXc9Kqc1Pe_jumYf-XdUF_bCThln-dA-8jRcTxxgbmhabu4JekA8J4maXyHHh9H4CPCDlo36V7IHMLGn4y4YN1CUQHLngyAn_7TbACxJ5wSlDUO2UTqgAWQkceq8yRmQJ1kEd_SdjcbKcB66OlOev-ZKVpxolKV8XW0X46aLg1izr10eECgI86MFIfA0x7BMiTxFfPMQgs-DERoIbYf35y2tcNYqc-zbSxhe5bXHY1pbJw3bDVAklXM0Me9a7HlTbZrs9LhZvL9vwOIcHcj4xkR_htD8oe5v-vYmD_pRZwG0hMd0wHm1JaeRa1So08_L-HCPdudQCjKQlx3Q_gmw-NFET2wH39CYbyPPNII1NKbM9zlYs8rAD6_Kkr-3U8BluHYt0EJXb7HESjhjSOc';
    var auth = `Bearer ${authToken}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', auth);
    this.http
      .post(
        'https://v2-dev-api.isorobot.io/api/v1/organization-policies',
        body,
        {
          headers,
        }
      )
      .subscribe(
        (success: any) => {
          alert(success.message);
          this.ngOnInit();
          this.myForm.reset();
        },
        (error) => {
          alert(error.message);
        }
      );
  }

  //Update
  toUpdate(data) {
    this.editMode = true;
    this.editId = data.id;
    this.myForm.setValue({
      title: data.title,
      description: data.description,
    });
  }

  onUpdate(form) {
    console.log(this.editId);
    const body = form.value;
    body.organization_id = 1;
    var authToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYjY1YmJkNmQ1NzEyZThhMGU0MTU3ZWJjNmZhZDVlODdlNzZkZDIyM2MyZDc1Y2Q0ZTkzZTgwNjNhYTQ4ZWYxOWE5ODg3NTM4MWM4ODViIn0.eyJhdWQiOiIxIiwianRpIjoiN2ZiNjViYmQ2ZDU3MTJlOGEwZTQxNTdlYmM2ZmFkNWU4N2U3NmRkMjIzYzJkNzVjZDRlOTNlODA2M2FhNDhlZjE5YTk4ODc1MzgxYzg4NWIiLCJpYXQiOjE2MDQxNDU3MTIsIm5iZiI6MTYwNDE0NTcxMiwiZXhwIjoxNjM1NjgxNzEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jLlI4delVOpjad3Xmy2lTfaG5X2eO0e3yIKQSJpolbvDnmTxXyF9GTGt-VtLDEXn8fRGk5EhuqjKtur9BrXDhFlP3dQOqtXqDCzY8ONGUiX8cWdik3jQgzff2KwWYcpNTjH_JyDcgq_CWlUUVXMGOVWrJxf9pA_Z7za-9wKsJWT4GG1n9-XaNvdjYwX_YhjZzzJfiCVZNQggmchmW4o92ynXp3ZTDV1RjteYXbJj7WOzLmbSe78XkaENT7bNXDFbqyx7YlaIGw--SK9NtrYbra92aXc9Kqc1Pe_jumYf-XdUF_bCThln-dA-8jRcTxxgbmhabu4JekA8J4maXyHHh9H4CPCDlo36V7IHMLGn4y4YN1CUQHLngyAn_7TbACxJ5wSlDUO2UTqgAWQkceq8yRmQJ1kEd_SdjcbKcB66OlOev-ZKVpxolKV8XW0X46aLg1izr10eECgI86MFIfA0x7BMiTxFfPMQgs-DERoIbYf35y2tcNYqc-zbSxhe5bXHY1pbJw3bDVAklXM0Me9a7HlTbZrs9LhZvL9vwOIcHcj4xkR_htD8oe5v-vYmD_pRZwG0hMd0wHm1JaeRa1So08_L-HCPdudQCjKQlx3Q_gmw-NFET2wH39CYbyPPNII1NKbM9zlYs8rAD6_Kkr-3U8BluHYt0EJXb7HESjhjSOc';
    var auth = `Bearer ${authToken}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', auth);
    this.http
      .put(
        'https://v2-dev-api.isorobot.io/api/v1/organization-policies/' +
          this.editId,
        body,
        { headers }
      )
      .subscribe(
        (success: any) => {
          alert(success.message);
          this.editMode = false;
          this.editId = null;
          this.myForm.reset();
          this.ngOnInit();
        },
        (error) => {
          alert(error.message);
        }
      );
  }

  //Delete

  onDelete(id) {
    var authToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjdmYjY1YmJkNmQ1NzEyZThhMGU0MTU3ZWJjNmZhZDVlODdlNzZkZDIyM2MyZDc1Y2Q0ZTkzZTgwNjNhYTQ4ZWYxOWE5ODg3NTM4MWM4ODViIn0.eyJhdWQiOiIxIiwianRpIjoiN2ZiNjViYmQ2ZDU3MTJlOGEwZTQxNTdlYmM2ZmFkNWU4N2U3NmRkMjIzYzJkNzVjZDRlOTNlODA2M2FhNDhlZjE5YTk4ODc1MzgxYzg4NWIiLCJpYXQiOjE2MDQxNDU3MTIsIm5iZiI6MTYwNDE0NTcxMiwiZXhwIjoxNjM1NjgxNzEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jLlI4delVOpjad3Xmy2lTfaG5X2eO0e3yIKQSJpolbvDnmTxXyF9GTGt-VtLDEXn8fRGk5EhuqjKtur9BrXDhFlP3dQOqtXqDCzY8ONGUiX8cWdik3jQgzff2KwWYcpNTjH_JyDcgq_CWlUUVXMGOVWrJxf9pA_Z7za-9wKsJWT4GG1n9-XaNvdjYwX_YhjZzzJfiCVZNQggmchmW4o92ynXp3ZTDV1RjteYXbJj7WOzLmbSe78XkaENT7bNXDFbqyx7YlaIGw--SK9NtrYbra92aXc9Kqc1Pe_jumYf-XdUF_bCThln-dA-8jRcTxxgbmhabu4JekA8J4maXyHHh9H4CPCDlo36V7IHMLGn4y4YN1CUQHLngyAn_7TbACxJ5wSlDUO2UTqgAWQkceq8yRmQJ1kEd_SdjcbKcB66OlOev-ZKVpxolKV8XW0X46aLg1izr10eECgI86MFIfA0x7BMiTxFfPMQgs-DERoIbYf35y2tcNYqc-zbSxhe5bXHY1pbJw3bDVAklXM0Me9a7HlTbZrs9LhZvL9vwOIcHcj4xkR_htD8oe5v-vYmD_pRZwG0hMd0wHm1JaeRa1So08_L-HCPdudQCjKQlx3Q_gmw-NFET2wH39CYbyPPNII1NKbM9zlYs8rAD6_Kkr-3U8BluHYt0EJXb7HESjhjSOc';
    var auth = `Bearer ${authToken}`;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', auth);
    this.http
      .delete(
        'https://v2-dev-api.isorobot.io/api/v1/organization-policies/' + id,
        { headers }
      )
      .subscribe(
        (success: any) => {
          alert(success.message);
          this.ngOnInit();
        },
        (error) => {
          alert(error.message);
        }
      );
  }
}
