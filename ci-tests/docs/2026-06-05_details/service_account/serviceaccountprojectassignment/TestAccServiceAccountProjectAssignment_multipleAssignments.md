# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_multipleAssignments Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 22) FAIL(x 8)
Success rate: 73.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:58](#error-2026-05-09t0058510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-05-16 00:56](#error-2026-05-16t0056410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-05-19 01:03](#error-2026-05-19t0103240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.02s
[2026-05-21 01:05](#error-2026-05-21t0105540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.08s
[2026-05-23 01:02](#error-2026-05-23t0102150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.02s
[2026-05-26 02:10](#error-2026-05-26t0210310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-05-30 01:03](#error-2026-05-30t0103360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.02s
[2026-06-02 01:10](#error-2026-06-02t0110230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 95.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 50 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09

### Error 2026-05-09T00:58:51+00:00
```
2026-05-09T00:58:51.4190542Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-09T00:58:51.4191163Z     resource_test.go:52: Creating execution project (2): test-acc-tf-p-8548714009805362046
2026-05-09T00:58:51.4191629Z     resource_test.go:52: 
2026-05-09T00:58:51.4192505Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:58:51.4194231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:58:51.4196064Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-09T00:58:51.4198072Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-09T00:58:51.4199082Z         	Error:      	Received unexpected error:
2026-05-09T00:58:51.4200953Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4202056Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-09T00:58:51.4203832Z         	Messages:   	Project creation failed: test-acc-tf-p-8548714009805362046, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:58:51.4205037Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (68.51s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 54 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14 PASS 19 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16

### Error 2026-05-16T00:56:41+00:00
```
2026-05-16T00:56:41.6633393Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-16T00:56:41.6634039Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-9090841374168206566
2026-05-16T00:56:41.6634514Z     resource_test.go:52: 
2026-05-16T00:56:41.6635415Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:56:41.6637554Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:56:41.6639402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-16T00:56:41.6641487Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-16T00:56:41.6642354Z         	Error:      	Received unexpected error:
2026-05-16T00:56:41.6644482Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.6645635Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-16T00:56:41.6647900Z         	Messages:   	Project creation failed: test-acc-tf-p-9090841374168206566, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:56:41.6649200Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (63.86s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 8 seconds
- 2026-05-19

### Error 2026-05-19T01:03:24+00:00
```
2026-05-19T01:03:24.0010143Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-19T01:03:24.0011222Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-944481238250059847
2026-05-19T01:03:24.0012015Z     resource_test.go:52: 
2026-05-19T01:03:24.0013125Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:24.0014871Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:24.0016586Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-19T01:03:24.0018854Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-19T01:03:24.0019728Z         	Error:      	Received unexpected error:
2026-05-19T01:03:24.0021607Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.0022695Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-19T01:03:24.0024465Z         	Messages:   	Project creation failed: test-acc-tf-p-944481238250059847, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:24.0025663Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (79.23s)
```

- 2026-05-20 PASS 6 seconds
- 2026-05-21

### Error 2026-05-21T01:05:54+00:00
```
2026-05-21T01:05:54.1345202Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-21T01:05:54.1345830Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-504896584433618771
2026-05-21T01:05:54.1346296Z     resource_test.go:52: 
2026-05-21T01:05:54.1347177Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:54.1348962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:54.1350744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-21T01:05:54.1352783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-21T01:05:54.1353931Z         	Error:      	Received unexpected error:
2026-05-21T01:05:54.1355849Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1357141Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-21T01:05:54.1358952Z         	Messages:   	Project creation failed: test-acc-tf-p-504896584433618771, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:54.1360218Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (85.75s)
```

- 2026-05-22 PASS 8 seconds
- 2026-05-23

### Error 2026-05-23T01:02:15+00:00
```
2026-05-23T01:02:15.4321475Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-23T01:02:15.4322613Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-7534258910561362893
2026-05-23T01:02:15.4323435Z     resource_test.go:52: 
2026-05-23T01:02:15.4325067Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:02:15.4328408Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:02:15.4332070Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-23T01:02:15.4335958Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-23T01:02:15.4337534Z         	Error:      	Received unexpected error:
2026-05-23T01:02:15.4341603Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:15.4343911Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-23T01:02:15.4347306Z         	Messages:   	Project creation failed: test-acc-tf-p-7534258910561362893, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:02:15.4349562Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (84.24s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26

### Error 2026-05-26T02:10:31+00:00
```
2026-05-26T02:10:31.1269040Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-26T02:10:31.1270483Z     resource_test.go:52: Creating execution project (2): test-acc-tf-p-1597341343234361124
2026-05-26T02:10:31.1272393Z     resource_test.go:52: 
2026-05-26T02:10:31.1273723Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:31.1276444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:10:31.1279438Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-26T02:10:31.1282033Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-26T02:10:31.1282890Z         	Error:      	Received unexpected error:
2026-05-26T02:10:31.1284621Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:31.1285731Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-26T02:10:31.1287971Z         	Messages:   	Project creation failed: test-acc-tf-p-1597341343234361124, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:31.1289998Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (62.00s)
```

- 2026-05-27 PASS 8 seconds
- 2026-05-28 PASS 2 minutes
- 2026-05-29 PASS 7 seconds
- 2026-05-30

### Error 2026-05-30T01:03:36+00:00
```
2026-05-30T01:03:36.9312374Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-30T01:03:36.9313510Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-4503628766259501925
2026-05-30T01:03:36.9314337Z     resource_test.go:52: 
2026-05-30T01:03:36.9315278Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:03:36.9317075Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:03:36.9319081Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-05-30T01:03:36.9321150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-05-30T01:03:36.9322034Z         	Error:      	Received unexpected error:
2026-05-30T01:03:36.9324219Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9325419Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-05-30T01:03:36.9327265Z         	Messages:   	Project creation failed: test-acc-tf-p-4503628766259501925, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:03:36.9328498Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (61.23s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 8 seconds
- 2026-06-02

### Error 2026-06-02T01:10:23+00:00
```
2026-06-02T01:10:23.2174127Z === RUN   TestAccServiceAccountProjectAssignment_multipleAssignments
2026-06-02T01:10:23.2175187Z     resource_test.go:52: Creating execution project (2): test-acc-tf-p-5638080731710586878
2026-06-02T01:10:23.2177934Z     resource_test.go:52: 
2026-06-02T01:10:23.2179499Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:10:23.2182301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:10:23.2185159Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-06-02T01:10:23.2188028Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:52
2026-06-02T01:10:23.2189250Z         	Error:      	Received unexpected error:
2026-06-02T01:10:23.2191223Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:23.2192397Z         	Test:       	TestAccServiceAccountProjectAssignment_multipleAssignments
2026-06-02T01:10:23.2194629Z         	Messages:   	Project creation failed: test-acc-tf-p-5638080731710586878, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:23.2196544Z --- FAIL: TestAccServiceAccountProjectAssignment_multipleAssignments (95.56s)
```

- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 45 seconds
- 2026-06-05 PASS 8 seconds

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
- 2026-05-17 PASS 7 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
