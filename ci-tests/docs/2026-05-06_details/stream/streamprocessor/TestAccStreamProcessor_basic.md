# stream/streamprocessor/TestAccStreamProcessor_basic Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.02s
[2026-04-14 01:20](#error-2026-04-14t0120230000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.08s
[2026-04-18 01:35](#error-2026-04-18t0135290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.01s
[2026-05-05 02:16](#error-2026-05-05t0216140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 93.01s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 55 seconds
- 2026-04-08 PASS 9 seconds
- 2026-04-09 PASS a minute
- 2026-04-10 PASS 10 seconds
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9896340Z === RUN   TestAccStreamProcessor_basic
2026-04-11T01:13:15.9897296Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-8821394447998768633
2026-04-11T01:13:15.9898124Z     resource_test.go:53: 
2026-04-11T01:13:15.9899499Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9901478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9903290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9905087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-11T01:13:15.9906971Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-04-11T01:13:15.9909184Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-04-11T01:13:15.9909994Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9911937Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9912958Z         	Test:       	TestAccStreamProcessor_basic
2026-04-11T01:13:15.9914703Z         	Messages:   	Project creation failed: test-acc-tf-p-8821394447998768633, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9915876Z --- FAIL: TestAccStreamProcessor_basic (70.22s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 9 seconds
- 2026-04-14

### Error 2026-04-14T01:20:23+00:00
```
2026-04-14T01:20:23.8155146Z === RUN   TestAccStreamProcessor_basic
2026-04-14T01:20:23.8155988Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-6858343395693706809
2026-04-14T01:20:23.8156523Z     resource_test.go:53: 
2026-04-14T01:20:23.8157480Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T01:20:23.8159369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T01:20:23.8161379Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T01:20:23.8163271Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-14T01:20:23.8165238Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-04-14T01:20:23.8167441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-04-14T01:20:23.8168281Z         	Error:      	Received unexpected error:
2026-04-14T01:20:23.8170319Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T01:20:23.8171385Z         	Test:       	TestAccStreamProcessor_basic
2026-04-14T01:20:23.8173201Z         	Messages:   	Project creation failed: test-acc-tf-p-6858343395693706809, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T01:20:23.8174422Z --- FAIL: TestAccStreamProcessor_basic (75.80s)
```

- 2026-04-15 PASS 7 seconds
- 2026-04-16 PASS 27 seconds
- 2026-04-17 PASS 7 seconds
- 2026-04-18

### Error 2026-04-18T01:35:29+00:00
```
2026-04-18T01:35:29.9009902Z === RUN   TestAccStreamProcessor_basic
2026-04-18T01:35:29.9010471Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-2135841586613176481
2026-04-18T01:35:29.9010966Z     resource_test.go:53: 
2026-04-18T01:35:29.9011856Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T01:35:29.9013582Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T01:35:29.9015320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T01:35:29.9017034Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-18T01:35:29.9019018Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-04-18T01:35:29.9021323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-04-18T01:35:29.9022142Z         	Error:      	Received unexpected error:
2026-04-18T01:35:29.9024048Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.9025036Z         	Test:       	TestAccStreamProcessor_basic
2026-04-18T01:35:29.9026707Z         	Messages:   	Project creation failed: test-acc-tf-p-2135841586613176481, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T01:35:29.9027801Z --- FAIL: TestAccStreamProcessor_basic (66.09s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 7 seconds
- 2026-04-21 PASS a minute
- 2026-04-22 PASS 7 seconds
- 2026-04-23 PASS 45 seconds
- 2026-04-24 PASS 9 seconds
- 2026-04-25 PASS a minute
- 2026-04-26: MISSING
- 2026-04-27 PASS 9 seconds
- 2026-04-28 PASS a minute
- 2026-04-29 PASS 9 seconds
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2796046Z === RUN   TestAccStreamProcessor_basic
2026-04-30T01:31:46.2796602Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-4613628654918822859
2026-04-30T01:31:46.2797084Z     resource_test.go:53: 
2026-04-30T01:31:46.2797990Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2799788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2801729Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2803527Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2805398Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-04-30T01:31:46.2807327Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-04-30T01:31:46.2808128Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2810056Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2811072Z         	Test:       	TestAccStreamProcessor_basic
2026-04-30T01:31:46.2812926Z         	Messages:   	Project creation failed: test-acc-tf-p-4613628654918822859, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2814260Z --- FAIL: TestAccStreamProcessor_basic (70.09s)
```

  - PASS 15 seconds
- 2026-05-01 PASS 8 seconds
- 2026-05-02 PASS 46 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 11 seconds
- 2026-05-05

### Error 2026-05-05T02:16:14+00:00
```
2026-05-05T02:16:14.7700662Z === RUN   TestAccStreamProcessor_basic
2026-05-05T02:16:14.7701644Z     resource_test.go:53: Creating execution project (1): test-acc-tf-p-6838098919126774783
2026-05-05T02:16:14.7702173Z     resource_test.go:53: 
2026-05-05T02:16:14.7703228Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T02:16:14.7705410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T02:16:14.7707830Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T02:16:14.7709981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-05T02:16:14.7712411Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:91
2026-05-05T02:16:14.7714726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:53
2026-05-05T02:16:14.7715582Z         	Error:      	Received unexpected error:
2026-05-05T02:16:14.7718101Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7719166Z         	Test:       	TestAccStreamProcessor_basic
2026-05-05T02:16:14.7721468Z         	Messages:   	Project creation failed: test-acc-tf-p-6838098919126774783, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T02:16:14.7722684Z --- FAIL: TestAccStreamProcessor_basic (93.13s)
```

- 2026-05-06 PASS 9 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 8 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 12 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 9 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 8 seconds
  - PASS 8 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 9 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 7 seconds
- 2026-05-04
  - PASS 9 seconds
  - PASS 8 seconds
- 2026-05-05 PASS 7 seconds
- 2026-05-06 PASS 8 seconds
