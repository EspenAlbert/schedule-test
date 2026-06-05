# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_singleAssignment Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-12 00:55](#error-2026-05-12t0055340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.02s
[2026-05-16 00:56](#error-2026-05-16t0056410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.07s
[2026-05-19 01:03](#error-2026-05-19t0103230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-21 01:05](#error-2026-05-21t0105540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.05s
[2026-05-23 01:02](#error-2026-05-23t0102150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.02s
[2026-05-28 01:00](#error-2026-05-28t0100010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s
[2026-05-30 01:03](#error-2026-05-30t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 55 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09 PASS 52 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12

### Error 2026-05-12T00:55:34+00:00
```
2026-05-12T00:55:34.8134740Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-12T00:55:34.8138122Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7853915444391516441
2026-05-12T00:55:34.8138932Z     resource_test.go:25: 
2026-05-12T00:55:34.8140540Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-12T00:55:34.8144161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-12T00:55:34.8146831Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-12T00:55:34.8150573Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-12T00:55:34.8151576Z         	Error:      	Received unexpected error:
2026-05-12T00:55:34.8153651Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:55:34.8154876Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-12T00:55:34.8157026Z         	Messages:   	Project creation failed: test-acc-tf-p-7853915444391516441, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-12T00:55:34.8158772Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (69.15s)
```

- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 38 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16

### Error 2026-05-16T00:56:41+00:00
```
2026-05-16T00:56:41.6616765Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-16T00:56:41.6617899Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-1360332946298141342
2026-05-16T00:56:41.6618404Z     resource_test.go:25: 
2026-05-16T00:56:41.6619609Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:56:41.6621428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:56:41.6623240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-16T00:56:41.6625297Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-16T00:56:41.6626184Z         	Error:      	Received unexpected error:
2026-05-16T00:56:41.6628519Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.6629692Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-16T00:56:41.6631550Z         	Messages:   	Project creation failed: test-acc-tf-p-1360332946298141342, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.6632844Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (76.70s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19

### Error 2026-05-19T01:03:23+00:00
```
2026-05-19T01:03:23.9987365Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-19T01:03:23.9988568Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-8727062768373873005
2026-05-19T01:03:23.9989310Z     resource_test.go:25: 
2026-05-19T01:03:23.9992197Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:23.9994873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:23.9998537Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-19T01:03:24.0001618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-19T01:03:24.0002577Z         	Error:      	Received unexpected error:
2026-05-19T01:03:24.0004596Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.0005734Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-19T01:03:24.0007688Z         	Messages:   	Project creation failed: test-acc-tf-p-8727062768373873005, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.0009296Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (63.94s)
```

- 2026-05-20 PASS 5 seconds
- 2026-05-21

### Error 2026-05-21T01:05:54+00:00
```
2026-05-21T01:05:54.1329479Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-21T01:05:54.1330108Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7639824938827350003
2026-05-21T01:05:54.1330711Z     resource_test.go:25: 
2026-05-21T01:05:54.1331597Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:54.1333645Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:54.1335428Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-21T01:05:54.1337447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-21T01:05:54.1338311Z         	Error:      	Received unexpected error:
2026-05-21T01:05:54.1340251Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1341376Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-21T01:05:54.1343408Z         	Messages:   	Project creation failed: test-acc-tf-p-7639824938827350003, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1344664Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (74.54s)
```

- 2026-05-22 PASS 6 seconds
- 2026-05-23

### Error 2026-05-23T01:02:15+00:00
```
2026-05-23T01:02:15.4292023Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-23T01:02:15.4293308Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-4332354036722250309
2026-05-23T01:02:15.4294169Z     resource_test.go:25: 
2026-05-23T01:02:15.4295806Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:15.4299448Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:15.4303052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-23T01:02:15.4306930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-23T01:02:15.4308493Z         	Error:      	Received unexpected error:
2026-05-23T01:02:15.4312337Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:15.4314376Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-23T01:02:15.4317702Z         	Messages:   	Project creation failed: test-acc-tf-p-4332354036722250309, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:15.4320520Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (78.21s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 43 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T01:00:01+00:00
```
2026-05-28T01:00:01.7643900Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-28T01:00:01.7644834Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-2475932960260168030
2026-05-28T01:00:01.7645330Z     resource_test.go:25: 
2026-05-28T01:00:01.7646638Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:00:01.7648991Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:00:01.7651074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-28T01:00:01.7652871Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-28T01:00:01.7653593Z         	Error:      	Received unexpected error:
2026-05-28T01:00:01.7655071Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:01.7655962Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-28T01:00:01.7657353Z         	Messages:   	Project creation failed: test-acc-tf-p-2475932960260168030, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:00:01.7658503Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (63.58s)
```

- 2026-05-29 PASS 6 seconds
- 2026-05-30

### Error 2026-05-30T01:03:36+00:00
```
2026-05-30T01:03:36.9292890Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-30T01:03:36.9293565Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-5674400493096094183
2026-05-30T01:03:36.9294323Z     resource_test.go:25: 
2026-05-30T01:03:36.9295243Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:36.9297068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:36.9298847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-30T01:03:36.9300892Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-05-30T01:03:36.9301775Z         	Error:      	Received unexpected error:
2026-05-30T01:03:36.9303746Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9305814Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-05-30T01:03:36.9309291Z         	Messages:   	Project creation failed: test-acc-tf-p-5674400493096094183, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9311453Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (83.44s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02 PASS a minute
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 11 seconds
- 2026-06-05 PASS 7 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 5 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
