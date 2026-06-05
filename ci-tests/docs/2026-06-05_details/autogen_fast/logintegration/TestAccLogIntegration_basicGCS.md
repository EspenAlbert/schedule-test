# autogen_fast/logintegration/TestAccLogIntegration_basicGCS Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.00s
[2026-05-16 00:58](#error-2026-05-16t0058270000) |  | dev | flaky_500 | 60.02s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-05-21 01:09](#error-2026-05-21t0109210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.01s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.09s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.02s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 2 minutes
- 2026-05-08 PASS 2 minutes
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2832286Z === RUN   TestAccLogIntegration_basicGCS
2026-05-09T01:07:49.2833369Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-87199777715495381
2026-05-09T01:07:49.2834317Z     resource_test.go:159: 
2026-05-09T01:07:49.2836073Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2839723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2842971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2846722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-09T01:07:49.2848556Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2852398Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2854229Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-09T01:07:49.2857714Z         	Messages:   	Project creation failed: test-acc-tf-p-87199777715495381, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2859972Z --- FAIL: TestAccLogIntegration_basicGCS (65.00s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 2 minutes
- 2026-05-12 PASS 2 minutes
- 2026-05-13 PASS 2 minutes
- 2026-05-14 PASS 2 minutes
- 2026-05-15 PASS 2 minutes
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4892176Z === RUN   TestAccLogIntegration_basicGCS
2026-05-16T00:58:27.4892743Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-6263090349364507707
2026-05-16T00:58:27.4893311Z     resource_test.go:159: 
2026-05-16T00:58:27.4894177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4895802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4897438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4899161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-16T00:58:27.4899953Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4900853Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T00:58:27.4901449Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-16T00:58:27.4902462Z         	Messages:   	Project creation failed: test-acc-tf-p-6263090349364507707, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-16T00:58:27.4903252Z --- FAIL: TestAccLogIntegration_basicGCS (60.25s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4451087Z === RUN   TestAccLogIntegration_basicGCS
2026-05-19T01:08:18.4451707Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-8076310798261099344
2026-05-19T01:08:18.4452245Z     resource_test.go:159: 
2026-05-19T01:08:18.4453313Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4455471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4457346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4459335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-19T01:08:18.4460191Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4462197Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4463280Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-19T01:08:18.4465233Z         	Messages:   	Project creation failed: test-acc-tf-p-8076310798261099344, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4466477Z --- FAIL: TestAccLogIntegration_basicGCS (69.83s)
```

- 2026-05-20 PASS 2 minutes
- 2026-05-21

### Error 2026-05-21T01:09:21+00:00
```
2026-05-21T01:09:21.2496323Z === RUN   TestAccLogIntegration_basicGCS
2026-05-21T01:09:21.2496936Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-4380322222588481451
2026-05-21T01:09:21.2497467Z     resource_test.go:159: 
2026-05-21T01:09:21.2499486Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:21.2501345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:21.2503171Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:21.2505110Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-21T01:09:21.2506107Z         	Error:      	Received unexpected error:
2026-05-21T01:09:21.2508294Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2510199Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-21T01:09:21.2513473Z         	Messages:   	Project creation failed: test-acc-tf-p-4380322222588481451, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2515654Z --- FAIL: TestAccLogIntegration_basicGCS (83.08s)
```

- 2026-05-22 PASS 2 minutes
- 2026-05-23 PASS 2 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 2 minutes
- 2026-05-26 PASS 3 minutes
- 2026-05-27 PASS 2 minutes
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6954616Z === RUN   TestAccLogIntegration_basicGCS
2026-05-28T01:01:18.6955181Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-212977422217111360
2026-05-28T01:01:18.6955670Z     resource_test.go:159: 
2026-05-28T01:01:18.6956533Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6958156Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6959811Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6961631Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-28T01:01:18.6962486Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6964942Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6966218Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-28T01:01:18.6968412Z         	Messages:   	Project creation failed: test-acc-tf-p-212977422217111360, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:18.6969821Z --- FAIL: TestAccLogIntegration_basicGCS (0.86s)
```

- 2026-05-29 PASS 2 minutes
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4198548Z === RUN   TestAccLogIntegration_basicGCS
2026-05-30T01:10:40.4199181Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-8518775941989587270
2026-05-30T01:10:40.4199737Z     resource_test.go:159: 
2026-05-30T01:10:40.4200705Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4202545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4204491Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4206450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-05-30T01:10:40.4207321Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4209321Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4210380Z         	Test:       	TestAccLogIntegration_basicGCS
2026-05-30T01:10:40.4212163Z         	Messages:   	Project creation failed: test-acc-tf-p-8518775941989587270, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4213459Z --- FAIL: TestAccLogIntegration_basicGCS (73.11s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 2 minutes
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0464537Z === RUN   TestAccLogIntegration_basicGCS
2026-06-02T01:15:50.0465180Z     resource_test.go:159: Creating execution project (1): test-acc-tf-p-2497029537350841439
2026-06-02T01:15:50.0465742Z     resource_test.go:159: 
2026-06-02T01:15:50.0466703Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0468519Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0470344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0472281Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:159
2026-06-02T01:15:50.0473163Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0475253Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0476345Z         	Test:       	TestAccLogIntegration_basicGCS
2026-06-02T01:15:50.0478130Z         	Messages:   	Project creation failed: test-acc-tf-p-2497029537350841439, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0479498Z --- FAIL: TestAccLogIntegration_basicGCS (88.17s)
```

- 2026-06-03 PASS 2 minutes
- 2026-06-04 PASS 2 minutes
- 2026-06-05 PASS 2 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 2 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 2 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 2 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 2 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
