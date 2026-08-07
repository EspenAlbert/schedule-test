# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.01s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.08s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6181163Z === RUN   TestAccStreamProcessor_basic
2026-07-09T01:15:21.6181611Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2971557026902955563
2026-07-09T01:15:21.6182007Z     resource_test.go:53: 
2026-07-09T01:15:21.6182708Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6184056Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6185410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6186856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.6188285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:130
2026-07-09T01:15:21.6189724Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-07-09T01:15:21.6190371Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6191837Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6192606Z         	Test:       	TestAccStreamProcessor_basic
2026-07-09T01:15:21.6193932Z         	Messages:   	Project creation failed: test-acc-tf-p-2971557026902955563, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6194961Z --- FAIL: TestAccStreamProcessor_basic (66.81s)
```

- 2026-07-10 PASS 10 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7417519Z === RUN   TestAccStreamProcessor_basic
2026-07-11T01:30:51.7418739Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-5129189447812803846
2026-07-11T01:30:51.7419647Z     resource_test.go:53: 
2026-07-11T01:30:51.7421352Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7424741Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7428131Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7431782Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7435379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:130
2026-07-11T01:30:51.7439220Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-07-11T01:30:51.7440705Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7444333Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7446175Z         	Test:       	TestAccStreamProcessor_basic
2026-07-11T01:30:51.7449611Z         	Messages:   	Project creation failed: test-acc-tf-p-5129189447812803846, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7451746Z --- FAIL: TestAccStreamProcessor_basic (67.17s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 9 seconds
- 2026-07-14 PASS 30 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 45 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0412060Z === RUN   TestAccStreamProcessor_basic
2026-07-18T01:45:13.0412645Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-1936380574242087744
2026-07-18T01:45:13.0413152Z     resource_test.go:53: 
2026-07-18T01:45:13.0414075Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0416184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0418031Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0419856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T01:45:13.0421919Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:130
2026-07-18T01:45:13.0423869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-07-18T01:45:13.0424949Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0426927Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0427978Z         	Test:       	TestAccStreamProcessor_basic
2026-07-18T01:45:13.0429756Z         	Messages:   	Project creation failed: test-acc-tf-p-1936380574242087744, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0430970Z --- FAIL: TestAccStreamProcessor_basic (63.08s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3470129Z === RUN   TestAccStreamProcessor_basic
2026-07-21T00:59:13.3470709Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4050448844244907418
2026-07-21T00:59:13.3471225Z     resource_test.go:53: 
2026-07-21T00:59:13.3472162Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3474179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3476041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3478022Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3479985Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:130
2026-07-21T00:59:13.3481969Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-07-21T00:59:13.3482936Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3484934Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3485994Z         	Test:       	TestAccStreamProcessor_basic
2026-07-21T00:59:13.3487912Z         	Messages:   	Project creation failed: test-acc-tf-p-4050448844244907418, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3489134Z --- FAIL: TestAccStreamProcessor_basic (72.77s)
```

- 2026-07-22 PASS 8 seconds
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.5968729Z === RUN   TestAccStreamProcessor_basic
2026-07-23T03:35:04.5969657Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2948623673451473757
2026-07-23T03:35:04.5970503Z     resource_test.go:53: 
2026-07-23T03:35:04.5972004Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.5975227Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.5978470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.5981529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T03:35:04.5984750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:130
2026-07-23T03:35:04.5988136Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-07-23T03:35:04.5989515Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.5992772Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5994428Z         	Test:       	TestAccStreamProcessor_basic
2026-07-23T03:35:04.5997544Z         	Messages:   	Project creation failed: test-acc-tf-p-2948623673451473757, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.5999436Z --- FAIL: TestAccStreamProcessor_basic (62.77s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 9 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 9 seconds
- 2026-07-28 PASS 10 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 7 seconds
- 2026-08-01 PASS 10 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 7 seconds
- 2026-08-04 PASS 13 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 12 seconds
- 2026-08-07 PASS 10 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 9 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 11 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 11 seconds
  - PASS 7 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 7 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
