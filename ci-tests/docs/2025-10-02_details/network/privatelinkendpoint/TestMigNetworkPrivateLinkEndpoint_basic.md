# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 38) FAIL(x 5)
Success rate: 88.37%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-09-07 00:41](#error-2025-09-07t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68bcd1dadf5af52d2d4d5eac/limits | qa | flaky_500 | 36.02s
[2025-09-14 00:41](#error-2025-09-14t0041240000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c60c44d444485797b21902/limits | qa | flaky_500 | 36.02s
[2025-09-15 06:33](#error-2025-09-15t0633080000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68c7b03fd444485797b5ccf8/limits | qa | flaky_500 | 34.05s
[2025-09-21 00:41](#error-2025-09-21t0041460000) | UNEXPECTED_ERROR /api/atlas/v2/groups/68cf46e45ccc8c4417187cbc/limits | qa | flaky_500 | 261.06s
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3610.01s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 4 minutes
- 2025-09-04 PASS 4 minutes
- 2025-09-05 PASS 3 minutes
- 2025-09-06 PASS 4 minutes
- 2025-09-07

### Error 2025-09-07T00:41:46+00:00
```
2025-09-07T00:41:46.8468732Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-09-07T00:41:46.8472352Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-07T00:41:46.8482456Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-07T00:41:46.8483114Z     resource_privatelink_endpoint_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-07T00:41:46.8483615Z         
2025-09-07T00:41:46.8484015Z         Error: error when getting project properties after create
2025-09-07T00:41:46.8484364Z         
2025-09-07T00:41:46.8484688Z           with mongodbatlas_project.test,
2025-09-07T00:41:46.8485302Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-07T00:41:46.8485876Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-07T00:41:46.8486190Z         
2025-09-07T00:41:46.8486681Z         error getting project (68bcd1dadf5af52d2d4d5eac): error getting project's
2025-09-07T00:41:46.8487332Z         limits (68bcd1dadf5af52d2d4d5eac):
2025-09-07T00:41:46.8487935Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68bcd1dadf5af52d2d4d5eac/limits
2025-09-07T00:41:46.8488624Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-07T00:41:46.8489217Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-07T00:41:46.8489639Z         BadRequestDetail: 
2025-09-07T00:41:46.8489986Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (36.20s)
```

- 2025-09-08
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-09-09 PASS 4 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 4 minutes
- 2025-09-12 PASS 4 minutes
- 2025-09-13 PASS 4 minutes
- 2025-09-14

### Error 2025-09-14T00:41:24+00:00
```
2025-09-14T00:41:24.6598742Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-09-14T00:41:24.6604195Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-14T00:41:24.6684273Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-14T00:41:24.6684833Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-14T00:41:24.6685251Z         
2025-09-14T00:41:24.6685654Z         Error: error when getting project properties after create
2025-09-14T00:41:24.6686006Z         
2025-09-14T00:41:24.6686330Z           with mongodbatlas_project.test,
2025-09-14T00:41:24.6686954Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-14T00:41:24.6687533Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-14T00:41:24.6687851Z         
2025-09-14T00:41:24.6688308Z         error getting project (68c60c44d444485797b21902): error getting project's
2025-09-14T00:41:24.6688794Z         limits (68c60c44d444485797b21902):
2025-09-14T00:41:24.6689397Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c60c44d444485797b21902/limits
2025-09-14T00:41:24.6690095Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-14T00:41:24.6690691Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-14T00:41:24.6691110Z         BadRequestDetail: 
2025-09-14T00:41:24.6691460Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (36.18s)
```

- 2025-09-15
  - PASS 3 minutes
  - FAIL 34 seconds

### Error 2025-09-15T06:33:08+00:00
```
2025-09-15T06:33:08.3302875Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-09-15T06:33:08.3307821Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-15T06:33:08.3343303Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-15T06:33:08.3343845Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-09-15T06:33:08.3344245Z         
2025-09-15T06:33:08.3344645Z         Error: error when getting project properties after create
2025-09-15T06:33:08.3344988Z         
2025-09-15T06:33:08.3345296Z           with mongodbatlas_project.test,
2025-09-15T06:33:08.3345902Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_project" "test":
2025-09-15T06:33:08.3346456Z           14: 		resource "mongodbatlas_project" "test" {
2025-09-15T06:33:08.3346764Z         
2025-09-15T06:33:08.3347212Z         error getting project (68c7b03fd444485797b5ccf8): error getting project's
2025-09-15T06:33:08.3347678Z         limits (68c7b03fd444485797b5ccf8):
2025-09-15T06:33:08.3348365Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68c7b03fd444485797b5ccf8/limits
2025-09-15T06:33:08.3349038Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-15T06:33:08.3349625Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-15T06:33:08.3350027Z         BadRequestDetail: 
2025-09-15T06:33:08.3362303Z    test_terraform_path=/home/runner/work/_temp/e6841990-d3ba-4b3b-b7ea-c824237aad61/terraform test_working_directory=/tmp/plugintest3042850351 test_name=TestAccNetworkRSPrivateLinkEndpointAzure_basic test_step_number=1
2025-09-15T06:33:08.3372102Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (34.51s)
```

- 2025-09-16 PASS 4 minutes
- 2025-09-17 PASS 4 minutes
- 2025-09-18 PASS 4 minutes
- 2025-09-19 PASS 4 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21

### Error 2025-09-21T00:41:46+00:00
```
2025-09-21T00:41:46.3451465Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-09-21T00:41:46.3456549Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-21T00:41:46.3477498Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-09-21T00:41:46.3478119Z     resource_migration_test.go:22: Step 2/2 error: Error running post-apply refresh plan: exit status 1
2025-09-21T00:41:46.3478587Z         
2025-09-21T00:41:46.3478985Z         Error: error when getting project properties after create
2025-09-21T00:41:46.3479443Z         
2025-09-21T00:41:46.3479758Z           with mongodbatlas_project.test,
2025-09-21T00:41:46.3480371Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2025-09-21T00:41:46.3480931Z           12: 		resource "mongodbatlas_project" "test" {
2025-09-21T00:41:46.3481235Z         
2025-09-21T00:41:46.3481722Z         error getting project (68cf46e45ccc8c4417187cbc): error getting project's
2025-09-21T00:41:46.3482303Z         limits (68cf46e45ccc8c4417187cbc):
2025-09-21T00:41:46.3482890Z         https://cloud-qa.mongodb.com/api/atlas/v2/groups/68cf46e45ccc8c4417187cbc/limits
2025-09-21T00:41:46.3483683Z         GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2025-09-21T00:41:46.3484268Z         Unexpected error. Reason: Internal Server Error. Params: [],
2025-09-21T00:41:46.3484678Z         BadRequestDetail: 
2025-09-21T00:41:46.3485517Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (261.55s)
```

- 2025-09-22 PASS 4 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 3 minutes
- 2025-09-26 PASS 3 minutes
- 2025-09-27 PASS 3 minutes
- 2025-09-28 PASS 3 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-10-01
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 55 minutes
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6837392Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-10-02T01:28:35.6842835Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-02T01:28:35.6864177Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-02T01:28:35.6864778Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-10-02T01:28:35.6865216Z         
2025-10-02T01:28:35.6866285Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6867660Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6868496Z         
2025-10-02T01:28:35.6868881Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-02T01:28:35.6869590Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-02T01:28:35.6870427Z           18: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-02T01:28:35.6870784Z         
2025-10-02T01:28:35.6877962Z    test_name=TestMigNetworkPrivateLinkEndpoint_basic test_terraform_path=/home/runner/work/_temp/b7bba0f0-da26-4aac-b102-a5f84e2a4b58/terraform test_step_number=1 test_working_directory=/tmp/plugintest41443145
2025-10-02T01:28:35.6879374Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-02T01:28:35.6879842Z         
2025-10-02T01:28:35.6880172Z         Error: error when destroying resource
2025-10-02T01:28:35.6880475Z         
2025-10-02T01:28:35.6880849Z         error deleting project (68ddc6b4a496fb5b13e13fcf):
2025-10-02T01:28:35.6881467Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6b4a496fb5b13e13fcf
2025-10-02T01:28:35.6881992Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-02T01:28:35.6882557Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-10-02T01:28:35.6883234Z         close group while it has active private endpoint services; please terminate
2025-10-02T01:28:35.6883849Z         all private endpoint services. Reason: Conflict. Params: [],
2025-10-02T01:28:35.6884271Z         BadRequestDetail: 
2025-10-02T01:28:35.6884627Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3610.09s)
```
