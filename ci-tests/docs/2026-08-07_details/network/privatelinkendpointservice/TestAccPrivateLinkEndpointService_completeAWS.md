# network/privatelinkendpointservice/TestAccPrivateLinkEndpointService_completeAWS Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:58](#error-2026-07-09t0058290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.05s
[2026-07-11 01:10](#error-2026-07-11t0110390000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.07s
[2026-07-14 01:05](#error-2026-07-14t0105410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.08s
[2026-07-16 01:12](#error-2026-07-16t0112110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.03s
[2026-07-21 00:52](#error-2026-07-21t0052210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-07-23 00:53](#error-2026-07-23t0053540000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:58:29+00:00
```
2026-07-09T00:58:29.1741303Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-09T00:58:29.1741945Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-7538804101516514159
2026-07-09T00:58:29.1742508Z     resource_test.go:26: 
2026-07-09T00:58:29.1743459Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:58:29.1745316Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:58:29.1747165Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:58:29.1749443Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-09T00:58:29.1750348Z         	Error:      	Received unexpected error:
2026-07-09T00:58:29.1752355Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1753494Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-09T00:58:29.1755353Z         	Messages:   	Project creation failed: test-acc-tf-p-7538804101516514159, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:58:29.1756775Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (65.54s)
```

- 2026-07-10 PASS 18 minutes
- 2026-07-11

### Error 2026-07-11T01:10:39+00:00
```
2026-07-11T01:10:39.0784045Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-11T01:10:39.0784865Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1875689808795511530
2026-07-11T01:10:39.0785427Z     resource_test.go:26: 
2026-07-11T01:10:39.0786434Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:10:39.0788380Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:10:39.0790798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:10:39.0792965Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-11T01:10:39.0793896Z         	Error:      	Received unexpected error:
2026-07-11T01:10:39.0796013Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0797198Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-11T01:10:39.0799136Z         	Messages:   	Project creation failed: test-acc-tf-p-1875689808795511530, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:10:39.0800667Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (64.69s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 6 minutes
- 2026-07-14

### Error 2026-07-14T01:05:41+00:00
```
2026-07-14T01:05:41.8092020Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-14T01:05:41.8092815Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-1721845534714604669
2026-07-14T01:05:41.8093441Z     resource_test.go:26: 
2026-07-14T01:05:41.8094562Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-14T01:05:41.8096703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-14T01:05:41.8099235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-14T01:05:41.8101604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-14T01:05:41.8102638Z         	Error:      	Received unexpected error:
2026-07-14T01:05:41.8104993Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8106297Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-14T01:05:41.8108426Z         	Messages:   	Project creation failed: test-acc-tf-p-1721845534714604669, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-14T01:05:41.8110133Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (69.80s)
```

- 2026-07-15 PASS 8 minutes
- 2026-07-16

### Error 2026-07-16T01:12:11+00:00
```
2026-07-16T01:12:11.4487794Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-16T01:12:11.4488833Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-8388959411345917901
2026-07-16T01:12:11.4489886Z     resource_test.go:26: 
2026-07-16T01:12:11.4490867Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T01:12:11.4494016Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T01:12:11.4496367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T01:12:11.4498856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-16T01:12:11.4499777Z         	Error:      	Received unexpected error:
2026-07-16T01:12:11.4501793Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:12:11.4504162Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-16T01:12:11.4506079Z         	Messages:   	Project creation failed: test-acc-tf-p-8388959411345917901, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T01:12:11.4507786Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (78.34s)
```

- 2026-07-17 PASS 6 minutes
- 2026-07-18 PASS 8 minutes
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:52:21+00:00
```
2026-07-21T00:52:21.4527338Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-21T00:52:21.4527986Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-7915731990656052633
2026-07-21T00:52:21.4528522Z     resource_test.go:26: 
2026-07-21T00:52:21.4529480Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:52:21.4531376Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:52:21.4533607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:52:21.4535689Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-21T00:52:21.4536591Z         	Error:      	Received unexpected error:
2026-07-21T00:52:21.4538759Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4539931Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-21T00:52:21.4541826Z         	Messages:   	Project creation failed: test-acc-tf-p-7915731990656052633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:52:21.4543118Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (62.06s)
```

- 2026-07-22 PASS 8 minutes
- 2026-07-23

### Error 2026-07-23T00:53:54+00:00
```
2026-07-23T00:53:54.2485093Z === RUN   TestAccPrivateLinkEndpointService_completeAWS
2026-07-23T00:53:54.2485756Z     resource_test.go:26: Creating execution project (1): test-acc-tf-p-6166021520817878131
2026-07-23T00:53:54.2486289Z     resource_test.go:26: 
2026-07-23T00:53:54.2487247Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:53:54.2489064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:53:54.2490878Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:53:54.2492868Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/privatelinkendpointservice/resource_test.go:26
2026-07-23T00:53:54.2493924Z         	Error:      	Received unexpected error:
2026-07-23T00:53:54.2496924Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2498383Z         	Test:       	TestAccPrivateLinkEndpointService_completeAWS
2026-07-23T00:53:54.2500778Z         	Messages:   	Project creation failed: test-acc-tf-p-6166021520817878131, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:53:54.2503319Z --- FAIL: TestAccPrivateLinkEndpointService_completeAWS (0.54s)
```

- 2026-07-24 PASS 12 minutes
- 2026-07-25 PASS 7 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 minutes
- 2026-07-28 PASS 15 minutes
- 2026-07-29 PASS 6 minutes
- 2026-07-30 PASS 33 minutes
- 2026-07-31 PASS 5 minutes
- 2026-08-01 PASS 5 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 5 minutes
- 2026-08-04 PASS 8 minutes
- 2026-08-05 PASS 6 minutes
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 9 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 6 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 minutes
  - PASS 6 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 6 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
