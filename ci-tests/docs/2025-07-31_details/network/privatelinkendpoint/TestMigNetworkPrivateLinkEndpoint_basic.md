# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 33 TestRuns in dev, qa from 2025-07-02 to 2025-07-31 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-07-13 00:57](#error-2025-07-13t0057570000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6872fe91207f456171040f8f/limits | qa | flaky_500 | 240.09s
[2025-07-14 01:31](#error-2025-07-14t0131130000) |  | dev |  | 3609.01s
[2025-07-23 08:27](#error-2025-07-23t0827310000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68809a0edafa37582cecc78a/limits | qa | flaky_500 | 264.09s

## Timeline
- 2025-07-01: MISSING
- 2025-07-02 PASS 3 minutes
- 2025-07-03 PASS 3 minutes
- 2025-07-04 PASS 3 minutes
- 2025-07-05 PASS 4 minutes
- 2025-07-06 PASS 3 minutes
- 2025-07-07 PASS 3 minutes
- 2025-07-08 PASS 3 minutes
- 2025-07-09 PASS 3 minutes
- 2025-07-10
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-07-11 PASS 3 minutes
- 2025-07-12 PASS 3 minutes
- 2025-07-13

### Error 2025-07-13T00:57:57+00:00
```
2025-07-13T00:57:57.7991482Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-07-13T00:57:57.7994866Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-13T00:57:57.8006538Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-13T00:57:57.8007261Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-13T00:57:57.8007807Z         
2025-07-13T00:57:57.8008209Z         Error: error when getting project properties after create
2025-07-13T00:57:57.8008563Z         
2025-07-13T00:57:57.8008878Z           with mongodbatlas_project.test,
2025-07-13T00:57:57.8009495Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-13T00:57:57.8010059Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-13T00:57:57.8010368Z         
2025-07-13T00:57:57.8010838Z         error getting project (6872fe91207f456171040f8f): error getting project's
2025-07-13T00:57:57.8011315Z         limits (6872fe91207f456171040f8f):
2025-07-13T00:57:57.8011899Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/6872fe91207f456171040f8f/limits
2025-07-13T00:57:57.8012580Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-13T00:57:57.8013178Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-13T00:57:57.8013589Z         BadRequestDetail: 
2025-07-13T00:57:57.8027191Z    test_working_directory=/tmp/plugintest1398243306 test_step_number=1 test_name=TestAccNetworkRSPrivateLinkEndpointAWS_basic test_terraform_path=/home/runner/work/_temp/c33174b7-a3ca-4a06-82eb-cf2219fae044/terraform
2025-07-13T00:57:57.8036424Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (240.91s)
```

- 2025-07-14

### Error 2025-07-14T01:31:13+00:00
```
2025-07-14T01:31:13.1089166Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-07-14T01:31:13.1092787Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-14T01:31:13.1201966Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-14T01:31:13.1202923Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-07-14T01:31:13.1203425Z         
2025-07-14T01:31:13.1203969Z         Error: error creating MongoDB Private Endpoints Connection: context deadline exceeded
2025-07-14T01:31:13.1204402Z         
2025-07-14T01:31:13.1204772Z           with mongodbatlas_privatelink_endpoint.test,
2025-07-14T01:31:13.1205463Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-07-14T01:31:13.1206108Z           18: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-07-14T01:31:13.1206442Z         
2025-07-14T01:31:13.1213967Z     panic.go:636: Error running post-test destroy, there may be dangling resources: exit status 1
2025-07-14T01:31:13.1214414Z         
2025-07-14T01:31:13.1214741Z         Error: error when destroying resource
2025-07-14T01:31:13.1215037Z         
2025-07-14T01:31:13.1215411Z         error deleting project (68744fcbd81a2d4bb4ea3f7b):
2025-07-14T01:31:13.1216007Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68744fcbd81a2d4bb4ea3f7b
2025-07-14T01:31:13.1216518Z         DELETE: HTTP 409 Conflict (Error code:
2025-07-14T01:31:13.1217078Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-07-14T01:31:13.1217736Z         close group while it has active private endpoint services; please terminate
2025-07-14T01:31:13.1218326Z         all private endpoint services. Reason: Conflict. Params: [],
2025-07-14T01:31:13.1218737Z         BadRequestDetail: 
2025-07-14T01:31:13.1219090Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3609.10s)
```

- 2025-07-15 PASS 3 minutes
- 2025-07-16 PASS 3 minutes
- 2025-07-17 PASS 3 minutes
- 2025-07-18 PASS 3 minutes
- 2025-07-19 PASS 4 minutes
- 2025-07-20 PASS 4 minutes
- 2025-07-21 PASS 3 minutes
- 2025-07-22 PASS 3 minutes
- 2025-07-23
  - PASS 3 minutes
  - FAIL 4 minutes

### Error 2025-07-23T08:27:31+00:00
```
2025-07-23T08:27:31.6384085Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-07-23T08:27:31.6387228Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-23T08:27:31.6397818Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-07-23T08:27:31.6398552Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running post-apply refresh plan: exit status 1
2025-07-23T08:27:31.6399086Z         
2025-07-23T08:27:31.6399476Z         Error: error when getting project properties after create
2025-07-23T08:27:31.6399950Z         
2025-07-23T08:27:31.6400462Z           with mongodbatlas_project.test,
2025-07-23T08:27:31.6401069Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-07-23T08:27:31.6401620Z           14: 		resource "mongodbatlas_project" "test" {
2025-07-23T08:27:31.6401927Z         
2025-07-23T08:27:31.6402381Z         error getting project (68809a0edafa37582cecc78a): error getting project's
2025-07-23T08:27:31.6402851Z         limits (68809a0edafa37582cecc78a):
2025-07-23T08:27:31.6403444Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68809a0edafa37582cecc78a/limits
2025-07-23T08:27:31.6404122Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-07-23T08:27:31.6404710Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-07-23T08:27:31.6405110Z         BadRequestDetail: 
2025-07-23T08:27:31.6405458Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (264.87s)
```

  - PASS 3 minutes
- 2025-07-24 PASS 3 minutes
- 2025-07-25 PASS 3 minutes
- 2025-07-26 PASS 3 minutes
- 2025-07-27 PASS 3 minutes
- 2025-07-28 PASS 3 minutes
- 2025-07-29 PASS 3 minutes
- 2025-07-30 PASS 3 minutes
- 2025-07-31 PASS 4 minutes