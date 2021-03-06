import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiRoutesService } from 'projects/shared-services/api-routes.service';
import { API_ROUTES } from 'projects/shared-services/api-routes.constants';
import { ICommunityGroup } from 'projects/shared-models/community-group.model';
import { ICommunities } from 'projects/shared-models/communities.model';
import { ICommunityGroups } from 'projects/shared-models/community-groups.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityGroupsService {


  constructor(
    private http: HttpClient,
    private apiRoutesService: ApiRoutesService,
  ) { }


  create(communityGroupData): Observable<ICommunityGroup> {
    return this.http.post<ICommunityGroup>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.CREATE), communityGroupData
    );
  }

  update(communityGroupId, communityGroupData): Observable<ICommunityGroup> {
    let params = new HttpParams().set('community_group_id', communityGroupId);
    return this.http.put<ICommunityGroup>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.UPDATE), communityGroupData, { params }
    );
  }

  show(communityGroupId): Observable<ICommunityGroup> {
    let params = new HttpParams().set('community_group_id', communityGroupId);
    return this.http.get<ICommunityGroup>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.SHOW), { params }
    );
  }

  getManagingCommunityGroups(): Observable<ICommunityGroups> {
    return this.http.get<ICommunityGroups>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.MANAGING_COMMUNITY_GROUPS)
    );
  }

  communities(communityGroupId): Observable<ICommunities> {
    let params = new HttpParams().set('community_group_id', communityGroupId);
    return this.http.get<ICommunities>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.COMMUNITIES), { params }
    );
  }


  pShow(communityGroupId): Observable<ICommunityGroup> {
    let params = new HttpParams().set('community_group_id', communityGroupId);
    return this.http.get<ICommunityGroup>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.PUBLIC.SHOW), { params }
    );
  }

  pCommunities(communityGroupId): Observable<ICommunities> {
    let params = new HttpParams().set('community_group_id', communityGroupId);
    return this.http.get<ICommunities>(
      this.apiRoutesService.getRoute(API_ROUTES.COMMUNITY_GROUPS.PUBLIC.COMMUNITIES), { params }
    );
  }

}
