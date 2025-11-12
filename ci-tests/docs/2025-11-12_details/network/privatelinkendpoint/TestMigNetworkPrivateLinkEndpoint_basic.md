# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 29) FAIL(x 2)
Success rate: 93.55%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | flaky_500 | 3606.06s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3607.03s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6767818Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-10-04T01:28:00.6776322Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-04T01:28:00.6834696Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-04T01:28:00.6835603Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-10-04T01:28:00.6836387Z         
2025-10-04T01:28:00.6837899Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:28:00.6839297Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:28:00.6840154Z         
2025-10-04T01:28:00.6840539Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-04T01:28:00.6841248Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-04T01:28:00.6841914Z           18: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-04T01:28:00.6842265Z         
2025-10-04T01:28:00.6848450Z    test_name=TestMigNetworkPrivateLinkEndpoint_basic test_terraform_path=/home/runner/work/_temp/974ef29d-58b3-45fd-a376-02394d4692a8/terraform test_working_directory=/tmp/plugintest3396713602 test_step_number=1
2025-10-04T01:28:00.6850052Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-04T01:28:00.6850928Z         
2025-10-04T01:28:00.6851269Z         Error: error when destroying resource
2025-10-04T01:28:00.6851575Z         
2025-10-04T01:28:00.6851943Z         error deleting project (68e06993065c07374c394eeb):
2025-10-04T01:28:00.6852549Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e06993065c07374c394eeb
2025-10-04T01:28:00.6853062Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-04T01:28:00.6853621Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-10-04T01:28:00.6854286Z         close group while it has active private endpoint services; please terminate
2025-10-04T01:28:00.6854882Z         all private endpoint services. Reason: Conflict. Params: [],
2025-10-04T01:28:00.6855295Z         BadRequestDetail: 
2025-10-04T01:28:00.6855646Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3606.60s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4464894Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2025-10-07T01:29:37.4470085Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-07T01:29:37.4523783Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2025-10-07T01:29:37.4524478Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2025-10-07T01:29:37.4524907Z         
2025-10-07T01:29:37.4525950Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:29:37.4527319Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:29:37.4527932Z         
2025-10-07T01:29:37.4528309Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-07T01:29:37.4528998Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-07T01:29:37.4529648Z           18: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-07T01:29:37.4529990Z         
2025-10-07T01:29:37.4536723Z    test_working_directory=/tmp/plugintest1980124781
2025-10-07T01:29:37.4537330Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-07T01:29:37.4537779Z         
2025-10-07T01:29:37.4538107Z         Error: error when destroying resource
2025-10-07T01:29:37.4538413Z         
2025-10-07T01:29:37.4538777Z         error deleting project (68e45e7312e64d6587b9e264):
2025-10-07T01:29:37.4539375Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e7312e64d6587b9e264
2025-10-07T01:29:37.4539888Z         DELETE: HTTP 409 Conflict (Error code:
2025-10-07T01:29:37.4540438Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2025-10-07T01:29:37.4541218Z         close group while it has active private endpoint services; please terminate
2025-10-07T01:29:37.4541822Z         all private endpoint services. Reason: Conflict. Params: [],
2025-10-07T01:29:37.4542231Z         BadRequestDetail: 
2025-10-07T01:29:37.4542585Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3607.30s)
```

- 2025-10-08 PASS 6 minutes
- 2025-10-09 PASS 6 minutes
- 2025-10-10 PASS 5 minutes
- 2025-10-11 PASS 5 minutes
- 2025-10-12 PASS 3 minutes
- 2025-10-13 PASS 4 minutes
- 2025-10-14 PASS 4 minutes
- 2025-10-15 PASS 3 minutes
- 2025-10-16 PASS 10 minutes
- 2025-10-17 PASS 4 minutes
- 2025-10-18: MISSING
- 2025-10-19 PASS 3 minutes
- 2025-10-20 PASS 4 minutes
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-10-23: MISSING
- 2025-10-24 PASS 4 minutes
- 2025-10-25: MISSING
- 2025-10-26 PASS 3 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 minutes
- 2025-10-30: MISSING
- 2025-10-31 PASS 4 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 minutes
- 2025-11-03 PASS 4 minutes
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 3 minutes
  - PASS 4 minutes
- 2025-11-06: MISSING
- 2025-11-07 PASS 4 minutes
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 minutes
- 2025-11-10 PASS 4 minutes
- 2025-11-11: MISSING
- 2025-11-12 PASS 3 minutes