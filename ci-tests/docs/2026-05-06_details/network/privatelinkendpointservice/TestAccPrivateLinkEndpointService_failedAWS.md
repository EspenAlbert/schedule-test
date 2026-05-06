# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_failedAWS Test Details
# Found 37 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 4)
Success rate: 89.19%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:46](#error-2026-04-09t0046480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.09s
[2026-04-11 00:51](#error-2026-04-11t0051300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-04-16 01:01](#error-2026-04-16t0101240000) | ATLAS_GENERAL_ERROR /api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService | dev |  | 0.06s
[2026-04-30 01:11](#error-2026-04-30t0111180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 7 minutes
- 2026-04-08 PASS 7 minutes
- 2026-04-09

### Error 2026-04-09T00:46:48+00:00
```
2026-04-09T00:46:48.3636293Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-04-09T00:46:48.3637312Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-6115750717435412989
2026-04-09T00:46:48.3638159Z     resource_test.go:54: 
2026-04-09T00:46:48.3639744Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:46:48.3642887Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:46:48.3645522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:46:48.3647700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-04-09T00:46:48.3648847Z         	Error:      	Received unexpected error:
2026-04-09T00:46:48.3650984Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:48.3652357Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-04-09T00:46:48.3654345Z         	Messages:   	Project creation failed: test-acc-tf-p-6115750717435412989, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:46:48.3655974Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (79.87s)
```

- 2026-04-10 PASS 7 minutes
- 2026-04-11

### Error 2026-04-11T00:51:30+00:00
```
2026-04-11T00:51:30.3722313Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-04-11T00:51:30.3723375Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-2672363342114449290
2026-04-11T00:51:30.3724706Z     resource_test.go:54: 
2026-04-11T00:51:30.3726251Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:51:30.3729175Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:51:30.3731033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:51:30.3733012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-04-11T00:51:30.3733879Z         	Error:      	Received unexpected error:
2026-04-11T00:51:30.3735871Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:51:30.3736998Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-04-11T00:51:30.3738989Z         	Messages:   	Project creation failed: test-acc-tf-p-2672363342114449290, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:51:30.3740462Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (63.63s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 7 minutes
- 2026-04-14 PASS 6 minutes
- 2026-04-15 PASS 7 minutes
- 2026-04-16

### Error 2026-04-16T01:01:24+00:00
```
2026-04-16T01:01:24.7932088Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-04-16T01:01:24.7937020Z === CONT  TestAccPrivateLinkEndpointService_failedAWS
2026-04-16T01:01:24.7976114Z    test_terraform_path=/home/runner/work/_temp/bf15fbe8-2128-4eea-a483-e6d82699456a/terraform test_name=TestAccPrivateLinkEndpointService_failedAWS
2026-04-16T01:01:24.7977942Z     resource_test.go:55: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-04-16T01:01:24.7978799Z         
2026-04-16T01:01:24.7982271Z         Error: error creating MongoDB Private Endpoints Connection: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032c81ec945fedc72a799/privateEndpoint/endpointService POST: HTTP 400 Bad Request (Error code: "ATLAS_GENERAL_ERROR") Detail: Reason: No Capacity. Reason: Bad Request. Params: [No Capacity], BadRequestDetail: 
2026-04-16T01:01:24.7983546Z         
2026-04-16T01:01:24.7983928Z           with mongodbatlas_privatelink_endpoint.this,
2026-04-16T01:01:24.7984627Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_privatelink_endpoint" "this":
2026-04-16T01:01:24.7985288Z           12: 		resource "mongodbatlas_privatelink_endpoint" "this" {
2026-04-16T01:01:24.7985641Z         
2026-04-16T01:01:24.7998691Z    test_working_directory=/tmp/plugintest2153095509 test_step_number=1
2026-04-16T01:01:24.8006551Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (0.63s)
```

- 2026-04-17 PASS 6 minutes
- 2026-04-18 PASS 6 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 6 minutes
- 2026-04-21 PASS 6 minutes
- 2026-04-22 PASS 35 minutes
- 2026-04-23 PASS 6 minutes
- 2026-04-24 PASS 7 minutes
- 2026-04-25 PASS 6 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 minutes
- 2026-04-28 PASS 6 minutes
- 2026-04-29 PASS 6 minutes
- 2026-04-30

### Error 2026-04-30T01:11:18+00:00
```
2026-04-30T01:11:18.0907453Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-04-30T01:11:18.0908226Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-1879275190318708964
2026-04-30T01:11:18.0908770Z     resource_test.go:54: 
2026-04-30T01:11:18.0909887Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:11:18.0912049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:11:18.0914185Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:11:18.0916639Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-04-30T01:11:18.0917686Z         	Error:      	Received unexpected error:
2026-04-30T01:11:18.0920000Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0921288Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-04-30T01:11:18.0923438Z         	Messages:   	Project creation failed: test-acc-tf-p-1879275190318708964, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:11:18.0924871Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (95.94s)
```

- 2026-05-01 PASS 6 minutes
- 2026-05-02 PASS 7 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 7 minutes
- 2026-05-05 PASS 7 minutes
- 2026-05-06 PASS 8 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 8 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 7 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 8 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 9 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 minutes
- 2026-05-04
  - PASS 7 minutes
  - PASS 6 minutes
- 2026-05-05 PASS 6 minutes
- 2026-05-06 PASS 7 minutes
