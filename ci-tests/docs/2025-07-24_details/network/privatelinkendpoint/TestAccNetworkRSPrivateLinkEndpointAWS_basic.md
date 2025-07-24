# network/privatelinkendpoint/TestAccNetworkRSPrivateLinkEndpointAWS_basic Test Details
# Found 38 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-06-29 00:44](#error-2025-06-29t0044250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6860898356291349dce6c6fa/limits | qa | flaky_500 | 241.07s
[2025-07-10 13:19](#error-2025-07-10t1319330000) | UNEXPECTED_ERROR /api/atlas/v2/groups/686fbafa006d8d55bb9e6074/limits | qa | flaky_500 | 33.02s
[2025-07-13 00:57](#error-2025-07-13t0057570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe8f006d8d55bbaa22d5/limits | qa | flaky_500 | 266.06s
[2025-07-14 01:31](#error-2025-07-14t0131130000) |  | dev |  | 3604.08s
[2025-07-20 01:33](#error-2025-07-20t0133020000) | UNEXPECTED_ERROR /api/atlas/v2/groups/687c393b426db7026b5b1968/limits | qa | flaky_500 | 35.05s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 3 minutes
- 2025-06-26 PASS 4 minutes
- 2025-06-27 PASS 3 minutes
- 2025-06-28 PASS 4 minutes
- 2025-06-29

### Error 2025-06-29T00:44:25+00:00
```
2025-06-29T00:44:25.8138171Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8142487Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8157926Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-06-29T00:44:25.8158608Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-06-29T00:44:25.8159105Z         
2025-06-29T00:44:25.8159505Z         Error: error when getting project properties after create
2025-06-29T00:44:25.8159852Z         
2025-06-29T00:44:25.8160267Z           with mongodbatlas_project.test,
2025-06-29T00:44:25.8160862Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-06-29T00:44:25.8161421Z           12: 		resource "mongodbatlas_project" "test" {
2025-06-29T00:44:25.8161725Z         
2025-06-29T00:44:25.8162304Z         error getting project (6860898356291349dce6c6fa): error getting project's
2025-06-29T00:44:25.8162772Z         limits (6860898356291349dce6c6fa):
2025-06-29T00:44:25.8163342Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6860898356291349dce6c6fa/limits
2025-06-29T00:44:25.8164118Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-06-29T00:44:25.8164732Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-06-29T00:44:25.8165141Z         BadRequestDetail: 
2025-06-29T00:44:25.8195277Z    test_working_directory=/tmp/plugintest3760895779 test_name=TestMigNetworkPrivateLinkEndpoint_basic test_terraform_path=/home/runner/work/_temp/ed926ef8-ba6c-45b8-b680-dede15945ee1/terraform test_step_number=2
2025-06-29T00:44:25.8203846Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (241.74s)
```

- 2025-06-30 PASS 3 minutes
- 2025-07-01
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 4 minutes
- 2025-07-05 PASS 3 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - FAIL 33 seconds

### Error 2025-07-10T13:19:33+00:00
```
2025-07-10T13:19:33.8607984Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-10T13:19:33.8611481Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-10T13:19:33.8646124Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-10T13:19:33.8646742Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-10T13:19:33.8647198Z         
2025-07-10T13:19:33.8647598Z         Error: error when getting project properties after create
2025-07-10T13:19:33.8647945Z         
2025-07-10T13:19:33.8648261Z           with mongodbatlas_project.test,
2025-07-10T13:19:33.8648869Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-10T13:19:33.8649428Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-10T13:19:33.8649739Z         
2025-07-10T13:19:33.8650204Z         error getting project (686fbafa006d8d55bb9e6074): error getting project's
2025-07-10T13:19:33.8650686Z         limits (686fbafa006d8d55bb9e6074):
2025-07-10T13:19:33.8651384Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/686fbafa006d8d55bb9e6074/limits
2025-07-10T13:19:33.8652075Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-10T13:19:33.8652665Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-10T13:19:33.8653074Z         BadRequestDetail: 
2025-07-10T13:19:33.8653443Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (33.23s)
```

- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7992255Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-13T00:57:57.7996257Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-13T00:57:57.8028138Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-13T00:57:57.8028833Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:57:57.8029341Z         
2025-07-13T00:57:57.8030163Z         Error: error when getting project properties after create
2025-07-13T00:57:57.8030525Z         
2025-07-13T00:57:57.8030851Z           with mongodbatlas_project.test,
2025-07-13T00:57:57.8031464Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-13T00:57:57.8032023Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:57:57.8032336Z         
2025-07-13T00:57:57.8032805Z         error getting project (6872fe8f006d8d55bbaa22d5): error getting project's
2025-07-13T00:57:57.8033284Z         limits (6872fe8f006d8d55bbaa22d5):
2025-07-13T00:57:57.8033873Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe8f006d8d55bbaa22d5/limits
2025-07-13T00:57:57.8034563Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:57:57.8035164Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:57:57.8035574Z         BadRequestDetail: 
2025-07-13T00:57:57.8036908Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (266.64s)
```

- 2025-07-14

### Error 2025-07-14T01:31:13+00:00
```
2025-07-14T01:31:13.1090002Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-14T01:31:13.1094058Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-14T01:31:13.1103627Z   
2025-07-14T01:31:13.1117078Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-14T01:31:13.1117705Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:31:13.1118169Z         
2025-07-14T01:31:13.1118715Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-14T01:31:13.1119152Z         
2025-07-14T01:31:13.1119516Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-14T01:31:13.1120209Z           on terraform_plugin_test.tf line 16, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-14T01:31:13.1120859Z           16: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-14T01:31:13.1121193Z         
2025-07-14T01:31:13.1152393Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-14T01:31:13.1153205Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:31:13.1153657Z         
2025-07-14T01:31:13.1153976Z         Error: error when destroying resource
2025-07-14T01:31:13.1154401Z         
2025-07-14T01:31:13.1154762Z         error deleting project (68744fc9d81a2d4bb4ea3dc0):
2025-07-14T01:31:13.1155362Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fc9d81a2d4bb4ea3dc0
2025-07-14T01:31:13.1155869Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T01:31:13.1156423Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-14T01:31:13.1157077Z         close group while it has active private endpoint services; please terminate
2025-07-14T01:31:13.1157670Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-14T01:31:13.1158075Z         BadRequestDetail: 
2025-07-14T01:31:13.1158446Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (3604.84s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 3 minutes
- 2025-07-20

### Error 2025-07-20T01:33:02+00:00
```
2025-07-20T01:33:02.8494929Z === RUN   TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-20T01:33:02.8499038Z === CONT  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-20T01:33:02.8513357Z === NAME  TestAccNetworkRSPrivateLinkEndpointAWS_basic
2025-07-20T01:33:02.8514207Z     resource_privatelink_endpoint_test.go:24: Step 1/2 error: Error running apply: exit status 1
2025-07-20T01:33:02.8514888Z         
2025-07-20T01:33:02.8515292Z         Error: error when getting project properties after create
2025-07-20T01:33:02.8515644Z         
2025-07-20T01:33:02.8515957Z           with mongodbatlas_project.test,
2025-07-20T01:33:02.8516574Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-07-20T01:33:02.8517147Z           12: 		resource "mongodbatlas_project" "test" {
2025-07-20T01:33:02.8517458Z         
2025-07-20T01:33:02.8517914Z         error getting project (687c393b426db7026b5b1968): error getting project's
2025-07-20T01:33:02.8518374Z         limits (687c393b426db7026b5b1968):
2025-07-20T01:33:02.8518957Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/687c393b426db7026b5b1968/limits
2025-07-20T01:33:02.8519634Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-20T01:33:02.8520224Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-20T01:33:02.8520640Z         BadRequestDetail: 
2025-07-20T01:33:02.8521016Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointAWS_basic (35.54s)
```

- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 4 minutes
- 2025-07-23
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes