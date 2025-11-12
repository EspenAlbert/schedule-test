# network/privatelinkendpointservice/TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed Test Details
# Found 42 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 40) FAIL(x 2)
Success rate: 95.24%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-04 01:28](#error-2025-10-04t0128000000) |  | dev | timeout | 3602.06s
[2025-10-07 01:29](#error-2025-10-07t0129370000) |  | dev | timeout | 3602.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04

### Error 2025-10-04T01:28:00+00:00
```
2025-10-04T01:28:00.6861107Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-10-04T01:28:00.6861720Z     resource_test.go:26: Creating execution project: test-acc-tf-p-1438734938417610451
2025-10-04T01:28:00.6863165Z   diagnostic_summary=
2025-10-04T01:28:00.6866364Z    tf_resource_type=mongodbatlas_privatelink_endpoint tf_req_id=72fd0c6b-124d-2dc5-3a3e-8d653985233a tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_proto_version=6.10
2025-10-04T01:28:00.6875174Z   
2025-10-04T01:28:00.6875718Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-04T01:28:00.6876203Z         
2025-10-04T01:28:00.6877254Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-04T01:28:00.6879309Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-04T01:28:00.6880121Z         
2025-10-04T01:28:00.6880495Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-04T01:28:00.6881198Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-04T01:28:00.6881991Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-04T01:28:00.6882346Z         
2025-10-04T01:28:00.6882713Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3602.58s)
```

- 2025-10-05 PASS 3 minutes
- 2025-10-06 PASS 3 minutes
- 2025-10-07

### Error 2025-10-07T01:29:37+00:00
```
2025-10-07T01:29:37.4550096Z === RUN   TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed
2025-10-07T01:29:37.4550694Z     resource_test.go:26: Creating execution project: test-acc-tf-p-5291849510614665238
2025-10-07T01:29:37.4552839Z   diagnostic_summary=
2025-10-07T01:29:37.4555836Z    tf_rpc=ApplyResourceChange tf_req_id=5583a0ab-ecb3-d311-0ca4-f442a90321b7
2025-10-07T01:29:37.4563962Z   
2025-10-07T01:29:37.4564613Z     resource_test.go:30: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2025-10-07T01:29:37.4565222Z         
2025-10-07T01:29:37.4566262Z         Error: error creating MongoDB Private Endpoints Connection: timeout while waiting for state to become 'WAITING_FOR_USER, FAILED, DELETED, AVAILABLE' (last state: 'INITIATING', timeout: 1h0m0s)
2025-10-07T01:29:37.4567611Z         will run cleanup because delete_on_create_timeout is true. If you suspect a transient error, wait before retrying to allow resource deletion to finish
2025-10-07T01:29:37.4568316Z         
2025-10-07T01:29:37.4568689Z           with mongodbatlas_privatelink_endpoint.test,
2025-10-07T01:29:37.4569376Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "test":
2025-10-07T01:29:37.4570022Z           12: 		resource "mongodbatlas_privatelink_endpoint" "test" {
2025-10-07T01:29:37.4570359Z         
2025-10-07T01:29:37.4570720Z --- FAIL: TestAccNetworkRSPrivateLinkEndpointServiceAWS_Failed (3602.89s)
```

- 2025-10-08 PASS 5 minutes
- 2025-10-09 PASS 10 minutes
- 2025-10-10 PASS 6 minutes
- 2025-10-11 PASS 6 minutes
- 2025-10-12 PASS 8 minutes
- 2025-10-13 PASS 4 minutes
- 2025-10-14 PASS 5 minutes
- 2025-10-15 PASS 4 minutes
- 2025-10-16 PASS 8 minutes
- 2025-10-17 PASS 4 minutes
- 2025-10-18 PASS 3 minutes
- 2025-10-19 PASS 3 minutes
- 2025-10-20
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-10-21 PASS 4 minutes
- 2025-10-22
  - PASS 6 minutes
  - PASS 3 minutes
- 2025-10-23 PASS 5 minutes
- 2025-10-24 PASS 4 minutes
- 2025-10-25 PASS 4 minutes
- 2025-10-26 PASS 4 minutes
- 2025-10-27 PASS 3 minutes
- 2025-10-28 PASS 4 minutes
- 2025-10-29 PASS 4 minutes
- 2025-10-30 PASS 4 minutes
- 2025-10-31 PASS 3 minutes
- 2025-11-01: MISSING
- 2025-11-02 PASS 3 minutes
- 2025-11-03 PASS 4 minutes
- 2025-11-04 PASS 4 minutes
- 2025-11-05
  - PASS 4 minutes
  - PASS 4 minutes
- 2025-11-06 PASS 4 minutes
- 2025-11-07 PASS 4 minutes
- 2025-11-08 PASS 3 minutes
- 2025-11-09 PASS 3 minutes
- 2025-11-10 PASS 4 minutes
- 2025-11-11 PASS 4 minutes
- 2025-11-12 PASS 4 minutes