# network/privatelinkendpoint/TestMigNetworkPrivateLinkEndpoint_basic Test Details
# Found 20 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 19) FAIL
Success rate: 95.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-02 01:38](#error-2026-02-02t0138360000) |  | dev | timeout | 3605.00s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08: MISSING
- 2026-01-09 PASS 3 minutes
- 2026-01-10: MISSING
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 minutes
- 2026-01-13: MISSING
- 2026-01-14 PASS 4 minutes
- 2026-01-15: MISSING
- 2026-01-16 PASS 3 minutes
- 2026-01-17: MISSING
- 2026-01-18: MISSING
- 2026-01-19 PASS 3 minutes
- 2026-01-20: MISSING
- 2026-01-21 PASS 4 minutes
- 2026-01-22: MISSING
- 2026-01-23 PASS 4 minutes
- 2026-01-24: MISSING
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27: MISSING
- 2026-01-28 PASS 4 minutes
- 2026-01-29: MISSING
- 2026-01-30 PASS 4 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:38:36+00:00
```
2026-02-02T01:38:36.8763849Z === RUN   TestMigNetworkPrivateLinkEndpoint_basic
2026-02-02T01:38:36.8769007Z === CONT  TestMigNetworkPrivateLinkEndpoint_basic
2026-02-02T01:38:36.8786952Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2026-02-02T01:38:36.8787544Z     resource_migration_test.go:22: Step 1/2 error: Error running apply: exit status 1
2026-02-02T01:38:36.8787993Z         
2026-02-02T01:38:36.8789121Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-02-02T01:38:36.8790621Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-02T01:38:36.8791299Z         
2026-02-02T01:38:36.8791705Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-02T01:38:36.8792622Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-02T01:38:36.8793344Z           18: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-02T01:38:36.8793710Z         
2026-02-02T01:38:36.8795922Z   diagnostic_summary=
2026-02-02T01:38:36.8798897Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas
2026-02-02T01:38:36.8812995Z   
2026-02-02T01:38:36.8847746Z === NAME  TestMigNetworkPrivateLinkEndpoint_basic
2026-02-02T01:38:36.8848395Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-02T01:38:36.8848884Z         
2026-02-02T01:38:36.8849208Z         Error: error when destroying resource
2026-02-02T01:38:36.8849521Z         
2026-02-02T01:38:36.8849899Z         error deleting project (697ff20971768356d7f804fd):
2026-02-02T01:38:36.8850516Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697ff20971768356d7f804fd
2026-02-02T01:38:36.8851048Z         DELETE: HTTP 409 Conflict (Error code:
2026-02-02T01:38:36.8851629Z         "CANNOT_CLOSE_GROUP_ACTIVE_ATLAS_PRIVATE_ENDPOINT_SERVICES") Detail: Cannot
2026-02-02T01:38:36.8852484Z         close group while it has active private endpoint services; please terminate
2026-02-02T01:38:36.8853133Z         all private endpoint services. Reason: Conflict. Params: [],
2026-02-02T01:38:36.8853567Z         BadRequestDetail: 
2026-02-02T01:38:36.8853960Z --- FAIL: TestMigNetworkPrivateLinkEndpoint_basic (3605.03s)
```

- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 3 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 3 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
