# network/privatelinkendpoint/TestAccPrivateLinkEndpoint_deleteOnCreateTimeout Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 34) FAIL(x 3)
Success rate: 91.89%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-16 01:01](#error-2026-04-16t0101240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032598379397d109c3357/privateEndpoint/endpointService | dev | flaky_500 | 1.05s
[2026-04-18 00:52](#error-2026-04-18t0052320000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService | dev | flaky_500 | 2.03s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.06s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 seconds
- 2026-04-08 PASS 2 seconds
- 2026-04-09 PASS 2 seconds
- 2026-04-10 PASS 3 seconds
- 2026-04-11 PASS 2 seconds
- 2026-04-12: MISSING
- 2026-04-13 PASS 2 seconds
- 2026-04-14 PASS 2 seconds
- 2026-04-15 PASS 2 seconds
- 2026-04-16

### Error 2026-04-16T01:01:24+00:00
```
2026-04-16T01:01:24.7844863Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-16T01:01:24.7850084Z === CONT  TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-16T01:01:24.7908795Z === NAME  TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-16T01:01:24.7911517Z     resource_test.go:114: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T01:01:24.7912635Z         
2026-04-16T01:01:24.7915665Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032598379397d109c3357/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-16T01:01:24.7917868Z         
2026-04-16T01:01:24.7918498Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-16T01:01:24.7919705Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-16T01:01:24.7920837Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-16T01:01:24.7921416Z         
2026-04-16T01:01:24.7922803Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (1.46s)
```

- 2026-04-17 PASS 3 seconds
- 2026-04-18

### Error 2026-04-18T00:52:32+00:00
```
2026-04-18T00:52:32.4773970Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-18T00:52:32.4786204Z === CONT  TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-18T00:52:32.4824948Z === NAME  TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-18T00:52:32.4825697Z     resource_test.go:115: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-18T00:52:32.4826233Z         
2026-04-18T00:52:32.4828113Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e2d3e7eb355eaa1b2ea18e/privateEndpoint/endpointService POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:52:32.4829434Z         
2026-04-18T00:52:32.4829823Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-18T00:52:32.4830587Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-18T00:52:32.4831306Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-18T00:52:32.4831927Z         
2026-04-18T00:52:32.4862666Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (2.33s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
- 2026-04-21 PASS 3 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 3 seconds
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 3 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 seconds
- 2026-04-28 PASS 4 seconds
- 2026-04-29 PASS 3 seconds
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0788772Z === RUN   TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-30T01:11:18.0790274Z     resource_test.go:110: Creating execution project (1): test-acc-tf-p-801926617986889051
2026-04-30T01:11:18.0791431Z     resource_test.go:110: 
2026-04-30T01:11:18.0793403Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0809739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0813475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0817517Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpoint/resource_test.go:110
2026-04-30T01:11:18.0819101Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0822962Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0825000Z         	Test:       	TestAccPrivateLinkEndpoint_deleteOnCreateTimeout
2026-04-30T01:11:18.0828626Z         	Messages:   	Project creation failed: test-acc-tf-p-801926617986889051, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0830973Z --- FAIL: TestAccPrivateLinkEndpoint_deleteOnCreateTimeout (91.60s)
```

- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 3 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 seconds
- 2026-05-05 PASS 44 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 seconds
- 2026-05-04
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-05-05 PASS 3 seconds
- 2026-05-06 PASS 4 seconds
