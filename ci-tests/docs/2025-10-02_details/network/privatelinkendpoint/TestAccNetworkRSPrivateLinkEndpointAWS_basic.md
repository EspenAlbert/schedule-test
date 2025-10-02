# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 40) FAIL(x 3)
Success rate: 93.02%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-08 09:46](#error-2025-09-08t0946170000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bea2a5341d8a4987761a03/limits | qa | flaky_500 | 255.03s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c421411d835e95b3628/limits | qa | flaky_500 | 34.03s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03ed444485797b5c893/limits | qa | flaky_500 | 34.03s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 3 minutes
- 2025-09-04 PASS 3 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 4 minutes
- 2025-09-07 PASS 3 minutes
- 2025-09-08
  - PASS 4 minutes
  - FAIL 4 minutes

### Error 2025-09-08T09:46:17+00:00
```
2025-09-08T09:46:17.9937951Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-08T09:46:17.9941786Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-08T09:46:17.9955523Z    test_working_directory=/tmp/plugintest1969731923
2025-09-08T09:46:17.9999023Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-08T09:46:17.9999722Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-09-08T09:46:18.0000240Z         
2025-09-08T09:46:18.0000651Z         Error: error when getting project properties after create
2025-09-08T09:46:18.0001013Z         
2025-09-08T09:46:18.0001345Z           with mongodbatlas_project.test,
2025-09-08T09:46:18.0001976Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-08T09:46:18.0002555Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-08T09:46:18.0002879Z         
2025-09-08T09:46:18.0003355Z         error getting project (68bea2a5341d8a4987761a03): error getting project's
2025-09-08T09:46:18.0003839Z         limits (68bea2a5341d8a4987761a03):
2025-09-08T09:46:18.0004447Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bea2a5341d8a4987761a03/limits
2025-09-08T09:46:18.0005143Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-08T09:46:18.0005972Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-08T09:46:18.0006400Z         BadRequestDetail: 
2025-09-08T09:46:18.0007250Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (255.33s)
```

  - PASS 4 minutes
- 2025-09-09 PASS 4 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 3 minutes
- 2025-09-12 PASS 4 minutes
- 2025-09-13 PASS 4 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6599535Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-14T00:41:24.6606005Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-14T00:41:24.6608681Z   diagnostic_summary=
2025-09-14T00:41:24.6611118Z   
2025-09-14T00:41:24.6646873Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-14T00:41:24.6647408Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6647797Z         
2025-09-14T00:41:24.6648198Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6648555Z         
2025-09-14T00:41:24.6648876Z           with mongodbatlas_project.test,
2025-09-14T00:41:24.6649494Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:24.6650193Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:41:24.6650617Z         
2025-09-14T00:41:24.6651093Z         error getting project (68c60c421411d835e95b3628): error getting project's
2025-09-14T00:41:24.6651747Z         limits (68c60c421411d835e95b3628):
2025-09-14T00:41:24.6652349Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c421411d835e95b3628/limits
2025-09-14T00:41:24.6653180Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6653785Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6654205Z         BadRequestDetail: 
2025-09-14T00:41:24.6654578Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (34.33s)
```

- 2025-09-15
  - PASS 3 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3303626Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-15T06:33:08.3309519Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-15T06:33:08.3311007Z   diagnostic_summary=
2025-09-15T06:33:08.3313841Z    tf_rpc=ApplyResourceChange tf_proto_version=6.9 tf_req_id=98cce118-11e6-7766-4a7f-94a7d2ee9322 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2025-09-15T06:33:08.3327841Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-09-15T06:33:08.3328549Z     resource_test.go:25: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3328938Z         
2025-09-15T06:33:08.3329337Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3329677Z         
2025-09-15T06:33:08.3330114Z           with mongodbatlas_project.test,
2025-09-15T06:33:08.3330721Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:08.3331282Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:33:08.3331580Z         
2025-09-15T06:33:08.3332047Z         error getting project (68c7b03ed444485797b5c893): error getting project's
2025-09-15T06:33:08.3332516Z         limits (68c7b03ed444485797b5c893):
2025-09-15T06:33:08.3333095Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03ed444485797b5c893/limits
2025-09-15T06:33:08.3333781Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3334371Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3334771Z         BadRequestDetail: 
2025-09-15T06:33:08.3335136Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (34.26s)
```

- 2025-09-16 PASS 3 minutes
- 2025-09-17 PASS 3 minutes
- 2025-09-18 PASS 4 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 3 minutes
- 2025-09-22 PASS 4 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 4 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 55 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-10-02 PASS 9 minutes