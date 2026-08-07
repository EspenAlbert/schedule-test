# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_singleAssignment Test Details
# Found 33 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 5)
Success rate: 84.85%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:52](#error-2026-07-09t0052190000) |  | dev | flaky_500 | 45.06s
[2026-07-11 00:46](#error-2026-07-11t0046380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 78.05s
[2026-07-18 00:44](#error-2026-07-18t0044240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.00s
[2026-07-21 00:47](#error-2026-07-21t0047440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-07-23 00:47](#error-2026-07-23t0047300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:52:19+00:00
```
2026-07-09T00:52:19.5092076Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-09T00:52:19.5092878Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6798654211234437969
2026-07-09T00:52:19.5093372Z     resource_test.go:25: 
2026-07-09T00:52:19.5094320Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:52:19.5096234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:52:19.5098157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-09T00:52:19.5100664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-07-09T00:52:19.5101586Z         	Error:      	Received unexpected error:
2026-07-09T00:52:19.5102566Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:52:19.5103309Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-09T00:52:19.5104516Z         	Messages:   	Project creation failed: test-acc-tf-p-6798654211234437969, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-07-09T00:52:19.5105379Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (45.56s)
```

- 2026-07-10 PASS 6 seconds
- 2026-07-11

### Error 2026-07-11T00:46:38+00:00
```
2026-07-11T00:46:38.6062225Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-11T00:46:38.6063541Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-1158876746336662461
2026-07-11T00:46:38.6064488Z     resource_test.go:25: 
2026-07-11T00:46:38.6066256Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:46:38.6068765Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:46:38.6071435Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-11T00:46:38.6074307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-07-11T00:46:38.6075425Z         	Error:      	Received unexpected error:
2026-07-11T00:46:38.6077879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.6079375Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-11T00:46:38.6081628Z         	Messages:   	Project creation failed: test-acc-tf-p-1158876746336662461, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:46:38.6082913Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (78.47s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 51 seconds
- 2026-07-15 PASS 7 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 7 seconds
- 2026-07-18

### Error 2026-07-18T00:44:24+00:00
```
2026-07-18T00:44:24.6205400Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-18T00:44:24.6206873Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-7895207753736464550
2026-07-18T00:44:24.6208329Z     resource_test.go:25: 
2026-07-18T00:44:24.6210264Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:24.6214020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:24.6217002Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-18T00:44:24.6219678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-07-18T00:44:24.6220717Z         	Error:      	Received unexpected error:
2026-07-18T00:44:24.6222713Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:24.6223918Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-18T00:44:24.6225787Z         	Messages:   	Project creation failed: test-acc-tf-p-7895207753736464550, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:24.6227527Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (74.03s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:47:44+00:00
```
2026-07-21T00:47:44.7423647Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-21T00:47:44.7424446Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-6063091012087533307
2026-07-21T00:47:44.7425684Z     resource_test.go:25: 
2026-07-21T00:47:44.7426641Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:47:44.7428696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:47:44.7430638Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-21T00:47:44.7432726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-07-21T00:47:44.7433612Z         	Error:      	Received unexpected error:
2026-07-21T00:47:44.7435592Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:44.7436758Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-21T00:47:44.7438953Z         	Messages:   	Project creation failed: test-acc-tf-p-6063091012087533307, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:47:44.7440221Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (64.49s)
```

- 2026-07-22 PASS 5 seconds
- 2026-07-23

### Error 2026-07-23T00:47:30+00:00
```
2026-07-23T00:47:30.1574672Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-23T00:47:30.1575826Z     resource_test.go:25: Creating execution project (1): test-acc-tf-p-832964950807133417
2026-07-23T00:47:30.1576585Z     resource_test.go:25: 
2026-07-23T00:47:30.1578045Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:30.1582447Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:30.1584319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-07-23T00:47:30.1586407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:25
2026-07-23T00:47:30.1587289Z         	Error:      	Received unexpected error:
2026-07-23T00:47:30.1589214Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:30.1590343Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-07-23T00:47:30.1592355Z         	Messages:   	Project creation failed: test-acc-tf-p-832964950807133417, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:30.1594011Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (62.20s)
```

- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 5 seconds
- 2026-07-29
  - PASS 4 seconds
  - PASS 4 seconds
- 2026-07-30 PASS 6 seconds
- 2026-07-31 PASS 9 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 7 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 6 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 7 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 5 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 6 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 5 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
