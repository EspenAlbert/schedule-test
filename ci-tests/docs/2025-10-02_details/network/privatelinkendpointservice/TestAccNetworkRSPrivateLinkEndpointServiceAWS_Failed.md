# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 43 TestRuns in dev, qa from 2025-09-03 to 2025-10-02 from master branch: 1 unique tests, PASS(x 42) FAIL
Success rate: 97.67%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-02 01:28](#error-2025-10-02t0128350000) |  | dev | timeout | 3603.07s

## Timeline
- 2025-09-02: MISSING
- 2025-09-03 PASS 6 minutes
- 2025-09-04 PASS 7 minutes
- 2025-09-05 PASS 4 minutes
- 2025-09-06 PASS 6 minutes
- 2025-09-07 PASS 7 minutes
- 2025-09-08
  - PASS 6 minutes
  - PASS 6 minutes
  - PASS 6 minutes
- 2025-09-09 PASS 5 minutes
- 2025-09-10 PASS 3 minutes
- 2025-09-11 PASS 4 minutes
- 2025-09-12 PASS 4 minutes
- 2025-09-13 PASS 4 minutes
- 2025-09-14 PASS 3 minutes
- 2025-09-15
  - PASS 4 minutes
  - PASS 3 minutes
- 2025-09-16 PASS 4 minutes
- 2025-09-17 PASS 4 minutes
- 2025-09-18 PASS 4 minutes
- 2025-09-19 PASS 3 minutes
- 2025-09-20 PASS 3 minutes
- 2025-09-21 PASS 3 minutes
- 2025-09-22 PASS 4 minutes
- 2025-09-23 PASS 3 minutes
- 2025-09-24 PASS 4 minutes
- 2025-09-25 PASS 4 minutes
- 2025-09-26 PASS 4 minutes
- 2025-09-27 PASS 4 minutes
- 2025-09-28 PASS 4 minutes
- 2025-09-29 PASS 3 minutes
- 2025-09-30
  - PASS 4 minutes
  - PASS 3 minutes
  - PASS 3 minutes
  - PASS 4 minutes
- 2025-10-01
  - PASS 4 minutes
  - PASS 10 minutes
  - PASS 4 minutes
  - PASS 55 minutes
  - PASS 3 minutes
  - PASS 4 minutes
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-10-02

### Error 2025-10-02T01:28:35+00:00
```
2025-10-02T01:28:35.6890949Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-10-02T01:28:35.6891571Z     resource_test.go:26: Creating execution project: test-acc-tf-p-9023423266753713651
2025-10-02T01:28:35.6892533Z   diagnostic_summary=
2025-10-02T01:28:35.6896452Z    tf_rpc=ApplyResourceChange tf_resource_type=mongodbatlas_privatelink_endpoint tf_req_id=586d6227-cb3b-5c07-250c-dd499250f322 tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10 diagnostic_detail="" diagnostic_severity=ERROR
2025-10-02T01:28:35.6905681Z    test_step_number=1
2025-10-02T01:28:35.6906284Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-02T01:28:35.6906771Z         
2025-10-02T01:28:35.6908024Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-02T01:28:35.6916396Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-02T01:28:35.6917111Z         
2025-10-02T01:28:35.6917512Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-02T01:28:35.6918447Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-02T01:28:35.6919126Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-02T01:28:35.6919486Z         
2025-10-02T01:28:35.6919866Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3603.67s)
```
