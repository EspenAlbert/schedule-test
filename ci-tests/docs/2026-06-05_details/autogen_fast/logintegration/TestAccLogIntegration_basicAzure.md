# autogen_fast/logintegration/TestAccLogIntegration_basicAzure Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.04s
[2026-05-16 00:58](#error-2026-05-16t0058270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-21 01:09](#error-2026-05-21t0109210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.08s
[2026-05-26 02:15](#error-2026-05-26t0215540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.04s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.01s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 4 minutes
- 2026-05-08 PASS 4 minutes
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2802578Z === RUN   TestAccLogIntegration_basicAzure
2026-05-09T01:07:49.2803680Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-918660947221409174
2026-05-09T01:07:49.2804644Z     resource_test.go:115: 
2026-05-09T01:07:49.2806514Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2810197Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2813660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2817682Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-09T01:07:49.2819714Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2823519Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2825713Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-09T01:07:49.2829398Z         	Messages:   	Project creation failed: test-acc-tf-p-918660947221409174, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2831597Z --- FAIL: TestAccLogIntegration_basicAzure (63.37s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 minutes
- 2026-05-12 PASS 4 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14 PASS 4 minutes
- 2026-05-15 PASS 4 minutes
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4878054Z === RUN   TestAccLogIntegration_basicAzure
2026-05-16T00:58:27.4878642Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-7095231100848236249
2026-05-16T00:58:27.4879163Z     resource_test.go:115: 
2026-05-16T00:58:27.4880028Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4881661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4883723Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4885465Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-16T00:58:27.4886388Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4888095Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4889067Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-16T00:58:27.4890677Z         	Messages:   	Project creation failed: test-acc-tf-p-7095231100848236249, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4891781Z --- FAIL: TestAccLogIntegration_basicAzure (63.94s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 minutes
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4435397Z === RUN   TestAccLogIntegration_basicAzure
2026-05-19T01:08:18.4436023Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-8301004796038375605
2026-05-19T01:08:18.4436566Z     resource_test.go:115: 
2026-05-19T01:08:18.4437534Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4439416Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4441288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4443267Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-19T01:08:18.4444384Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4446397Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4447487Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-19T01:08:18.4449307Z         	Messages:   	Project creation failed: test-acc-tf-p-8301004796038375605, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4450685Z --- FAIL: TestAccLogIntegration_basicAzure (64.08s)
```

- 2026-05-20 PASS 4 minutes
- 2026-05-21

### Error 2026-05-21T01:09:21+00:00
```
2026-05-21T01:09:21.2480784Z === RUN   TestAccLogIntegration_basicAzure
2026-05-21T01:09:21.2481408Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-7406921751186213339
2026-05-21T01:09:21.2481951Z     resource_test.go:115: 
2026-05-21T01:09:21.2482899Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:21.2484736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:21.2486572Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:21.2488925Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-21T01:09:21.2489809Z         	Error:      	Received unexpected error:
2026-05-21T01:09:21.2491778Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2492875Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-21T01:09:21.2494693Z         	Messages:   	Project creation failed: test-acc-tf-p-7406921751186213339, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2495927Z --- FAIL: TestAccLogIntegration_basicAzure (91.83s)
```

- 2026-05-22 PASS 4 minutes
- 2026-05-23 PASS 5 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 minutes
- 2026-05-26

### Error 2026-05-26T02:15:54+00:00
```
2026-05-26T02:15:54.1801128Z === RUN   TestAccLogIntegration_basicAzure
2026-05-26T02:15:54.1801729Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-6216222428462397838
2026-05-26T02:15:54.1802232Z     resource_test.go:115: 
2026-05-26T02:15:54.1803120Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:54.1804981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:54.1806652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:54.1808436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-26T02:15:54.1809248Z         	Error:      	Received unexpected error:
2026-05-26T02:15:54.1811034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1812075Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-26T02:15:54.1813699Z         	Messages:   	Project creation failed: test-acc-tf-p-6216222428462397838, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1815212Z --- FAIL: TestAccLogIntegration_basicAzure (63.26s)
```

- 2026-05-27 PASS 5 minutes
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.6941128Z === RUN   TestAccLogIntegration_basicAzure
2026-05-28T01:01:18.6941692Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-3097132778778583255
2026-05-28T01:01:18.6942199Z     resource_test.go:115: 
2026-05-28T01:01:18.6943053Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.6944674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.6946318Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.6948037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-28T01:01:18.6948815Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.6950596Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6951559Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-28T01:01:18.6953128Z         	Messages:   	Project creation failed: test-acc-tf-p-3097132778778583255, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.6954232Z --- FAIL: TestAccLogIntegration_basicAzure (77.37s)
```

- 2026-05-29 PASS 4 minutes
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4182806Z === RUN   TestAccLogIntegration_basicAzure
2026-05-30T01:10:40.4183759Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-3480867950490593318
2026-05-30T01:10:40.4184335Z     resource_test.go:115: 
2026-05-30T01:10:40.4185310Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4187151Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4189111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4191093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-30T01:10:40.4191963Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4194074Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4195144Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-30T01:10:40.4196928Z         	Messages:   	Project creation failed: test-acc-tf-p-3480867950490593318, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4198117Z --- FAIL: TestAccLogIntegration_basicAzure (88.11s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 5 minutes
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0449138Z === RUN   TestAccLogIntegration_basicAzure
2026-06-02T01:15:50.0449795Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-2023444517426479570
2026-06-02T01:15:50.0450365Z     resource_test.go:115: 
2026-06-02T01:15:50.0451335Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0453158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0455118Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0457049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-06-02T01:15:50.0457929Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0459899Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0460983Z         	Test:       	TestAccLogIntegration_basicAzure
2026-06-02T01:15:50.0462772Z         	Messages:   	Project creation failed: test-acc-tf-p-2023444517426479570, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0464099Z --- FAIL: TestAccLogIntegration_basicAzure (64.32s)
```

- 2026-06-03 PASS 4 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05 PASS 4 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
