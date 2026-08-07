# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_failedAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s
[2026-07-11 01:10](#error-2026-07-11t0110390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s
[2026-07-16 01:12](#error-2026-07-16t0112110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.05s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-07-22 01:10](#error-2026-07-22t0110330000) |  | dev |  | 418.03s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1757257Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-09T00:58:29.1757894Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-6721713859533863092
2026-07-09T00:58:29.1758441Z     resource_test.go:54: 
2026-07-09T00:58:29.1759529Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1761384Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1763238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1765272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-07-09T00:58:29.1766166Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1768281Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1769633Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-07-09T00:58:29.1771498Z         	Messages:   	Project creation failed: test-acc-tf-p-6721713859533863092, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1772776Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (64.29s)
```

- 2026-07-10 PASS 6 minutes
- 2026-07-11

### Error 2026-07-11T01:10:39+00:00
```
2026-07-11T01:10:39.0801192Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-11T01:10:39.0801856Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-5981419761473767586
2026-07-11T01:10:39.0802405Z     resource_test.go:54: 
2026-07-11T01:10:39.0803398Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:39.0805357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:39.0807326Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:39.0809467Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-07-11T01:10:39.0810670Z         	Error:      	Received unexpected error:
2026-07-11T01:10:39.0812798Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0813972Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-07-11T01:10:39.0815890Z         	Messages:   	Project creation failed: test-acc-tf-p-5981419761473767586, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0817345Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (72.57s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 minutes
- 2026-07-14 PASS 8 minutes
- 2026-07-15 PASS 6 minutes
- 2026-07-16

### Error 2026-07-16T01:12:11+00:00
```
2026-07-16T01:12:11.4508791Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-16T01:12:11.4509511Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-5242210899106623190
2026-07-16T01:12:11.4510044Z     resource_test.go:54: 
2026-07-16T01:12:11.4511005Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:12:11.4512902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:12:11.4514768Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:12:11.4516809Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-07-16T01:12:11.4518074Z         	Error:      	Received unexpected error:
2026-07-16T01:12:11.4521223Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:12:11.4522393Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-07-16T01:12:11.4524299Z         	Messages:   	Project creation failed: test-acc-tf-p-5242210899106623190, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:12:11.4525618Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (73.49s)
```

- 2026-07-17 PASS 7 minutes
- 2026-07-18 PASS 8 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4543806Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-21T00:52:21.4544494Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-1016300587811758828
2026-07-21T00:52:21.4545026Z     resource_test.go:54: 
2026-07-21T00:52:21.4545981Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4547863Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4549753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4551808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-07-21T00:52:21.4552710Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4554897Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4556039Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-07-21T00:52:21.4557904Z         	Messages:   	Project creation failed: test-acc-tf-p-1016300587811758828, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4559326Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (72.30s)
```

- 2026-07-22

### Error 2026-07-22T01:10:33+00:00
```
2026-07-22T01:10:33.7539463Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-22T01:10:33.7542483Z === CONT  TestAccPrivateLinkEndpointService_failedAWS
2026-07-22T01:10:33.7545275Z   diagnostic_summary=
2026-07-22T01:10:33.7548631Z    diagnostic_detail=""
2026-07-22T01:10:33.7560554Z === NAME  TestAccPrivateLinkEndpointService_failedAWS
2026-07-22T01:10:33.7561319Z     resource_test.go:55: Step 1/1, expected an error with pattern, no match on: Error running apply: exit status 1
2026-07-22T01:10:33.7561871Z         
2026-07-22T01:10:33.7562670Z         Error: privatelink endpoint service is in a failed state: Verify endpoint ID and accepted regions, then retry your connection.
2026-07-22T01:10:33.7563294Z         
2026-07-22T01:10:33.7563740Z           with mongodbatlas_privatelink_endpoint_service.this,
2026-07-22T01:10:33.7564587Z           on terraform_plugin_test.tf line 18, in resource "mongodbatlas_privatelink_endpoint_service" "this":
2026-07-22T01:10:33.7565396Z           18: 		resource "mongodbatlas_privatelink_endpoint_service" "this" {
2026-07-22T01:10:33.7565815Z         
2026-07-22T01:10:33.7566161Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (418.31s)
```

- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2504078Z === RUN   TestAccPrivateLinkEndpointService_failedAWS
2026-07-23T00:53:54.2505320Z     resource_test.go:54: Creating execution project (1): test-acc-tf-p-7524256590830335325
2026-07-23T00:53:54.2506183Z     resource_test.go:54: 
2026-07-23T00:53:54.2508105Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2510845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2512722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2514924Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:54
2026-07-23T00:53:54.2515853Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2518809Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2520248Z         	Test:       	TestAccPrivateLinkEndpointService_failedAWS
2026-07-23T00:53:54.2522635Z         	Messages:   	Project creation failed: test-acc-tf-p-7524256590830335325, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2524174Z --- FAIL: TestAccPrivateLinkEndpointService_failedAWS (1.68s)
```

- 2026-07-24 PASS 7 minutes
- 2026-07-25 PASS 6 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 6 minutes
- 2026-07-28 PASS 6 minutes
- 2026-07-29 PASS 6 minutes
- 2026-07-30 PASS 6 minutes
- 2026-07-31 PASS 7 minutes
- 2026-08-01 PASS 6 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 minutes
- 2026-08-04 PASS 6 minutes
- 2026-08-05 PASS 7 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 6 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 7 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 7 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 7 minutes
  - PASS 7 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
