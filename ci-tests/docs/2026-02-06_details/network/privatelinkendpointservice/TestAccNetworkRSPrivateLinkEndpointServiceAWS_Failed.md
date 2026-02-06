# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 33 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL(x 3)
Success rate: 90.91%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-31 01:36](#error-2026-01-31t0136540000) |  | dev | timeout | 3603.04s
[2026-02-02 01:40](#error-2026-02-02t0140150000) |  | dev | timeout | 3602.07s
[2026-02-03 00:47](#error-2026-02-03t0047140000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/698143bce3c7fce2317e2c41/privateEndpoint/endpointService | dev |  | 2.10s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 3 minutes
- 2026-01-09 PASS 4 minutes
- 2026-01-10 PASS 5 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 4 minutes
- 2026-01-13 PASS 5 minutes
- 2026-01-14 PASS 4 minutes
- 2026-01-15 PASS 5 minutes
- 2026-01-16 PASS 4 minutes
- 2026-01-17 PASS 4 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 4 minutes
- 2026-01-20 PASS 4 minutes
- 2026-01-21 PASS 3 minutes
- 2026-01-22 PASS 4 minutes
- 2026-01-23 PASS 4 minutes
- 2026-01-24 PASS 4 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 4 minutes
- 2026-01-27 PASS 6 minutes
- 2026-01-28 PASS 4 minutes
- 2026-01-29 PASS 4 minutes
- 2026-01-30 PASS 4 minutes
- 2026-01-31

### Error 2026-01-31T01:36:54+00:00
```
2026-01-31T01:36:54.7908063Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2026-01-31T01:36:54.7909442Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-4639560904596197101
2026-01-31T01:36:54.7912766Z   diagnostic_summary=
2026-01-31T01:36:54.7917783Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 tf_rpc=ApplyResourceChange
2026-01-31T01:36:54.7928413Z   
2026-01-31T01:36:54.7929012Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-01-31T01:36:54.7929559Z         
2026-01-31T01:36:54.7930739Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-01-31T01:36:54.7932269Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-01-31T01:36:54.7933182Z         
2026-01-31T01:36:54.7933600Z           with mongodbatlas_privatelink_endpoint.test,
2026-01-31T01:36:54.7936365Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-01-31T01:36:54.7937577Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-01-31T01:36:54.7938159Z         
2026-01-31T01:36:54.7938774Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3603.37s)
```

- 2026-02-01: MISSING
- 2026-02-02

### Error 2026-02-02T01:40:15+00:00
```
2026-02-02T01:40:15.1090926Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2026-02-02T01:40:15.1092685Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-399728123024947544
2026-02-02T01:40:15.1096005Z   diagnostic_summary=
2026-02-02T01:40:15.1102568Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_req_id=0e3cfa28-9390-5f9b-9c12-4c096b857145 tf_proto_version=6.10 tf_rpc=ApplyResourceChange
2026-02-02T01:40:15.1118587Z    test_working_directory=/tmp/plugintest722255141 test_terraform_path=/home/runner/work/_temp/ffb5750b-d22c-4f6d-91d8-b687d241b1f4/terraform test_name=TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed test_step_number=1
2026-02-02T01:40:15.1121141Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-02T01:40:15.1122111Z         
2026-02-02T01:40:15.1124419Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2026-02-02T01:40:15.1127250Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2026-02-02T01:40:15.1128515Z         
2026-02-02T01:40:15.1129215Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-02T01:40:15.1130646Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-02T01:40:15.1131975Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-02T01:40:15.1132832Z         
2026-02-02T01:40:15.1133515Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3602.71s)
```

- 2026-02-03

### Error 2026-02-03T00:47:14+00:00
```
2026-02-03T00:47:14.7610947Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2026-02-03T00:47:14.7611590Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8726884921889804606
2026-02-03T00:47:14.7624851Z    test_working_directory=/tmp/plugintest927559732 test_name=TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed test_terraform_path=/home/runner/work/_temp/ebd67da4-db6a-45b7-973f-46e1534798c5/terraform
2026-02-03T00:47:14.7626095Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-02-03T00:47:14.7626620Z         
2026-02-03T00:47:14.7628559Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bce3c7fce2317e2c41/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-02-03T00:47:14.7630034Z         
2026-02-03T00:47:14.7630434Z           with mongodbatlas_privatelink_endpoint.test,
2026-02-03T00:47:14.7631170Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2026-02-03T00:47:14.7631859Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2026-02-03T00:47:14.7632214Z         
2026-02-03T00:47:14.7632566Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (2.95s)
```

- 2026-02-04 PASS 3 minutes
- 2026-02-05 PASS 4 minutes
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
- 2026-01-18 PASS 4 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 3 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 4 minutes
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
