# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 6)
Success rate: 80.65%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:56](#error-2026-05-09t0156210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-05-19 01:43](#error-2026-05-19t0143060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.00s
[2026-05-21 02:03](#error-2026-05-21t0203030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.08s
[2026-05-26 03:10](#error-2026-05-26t0310440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-05-28 02:20](#error-2026-05-28t0220310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-05-30 01:46](#error-2026-05-30t0146340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 4 minutes
  - PASS 5 minutes
- 2026-05-08 PASS 28 minutes
- 2026-05-09

### Error 2026-05-09T01:56:21+00:00
```
2026-05-09T01:56:21.9478098Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-09T01:56:21.9479098Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-3601482734562080351
2026-05-09T01:56:21.9479881Z     resource_test.go:51: 
2026-05-09T01:56:21.9481895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:56:21.9485008Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:56:21.9488078Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:56:21.9491135Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-09T01:56:21.9494534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-09T01:56:21.9496561Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:56:21.9497485Z         	Error:      	Received unexpected error:
2026-05-09T01:56:21.9512245Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9514356Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-09T01:56:21.9517376Z         	Messages:   	Project creation failed: test-acc-tf-p-3601482734562080351, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:56:21.9519360Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (62.95s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 32 minutes
- 2026-05-12 PASS 48 minutes
- 2026-05-13 PASS 35 minutes
- 2026-05-14 PASS 24 minutes
- 2026-05-15 PASS 38 minutes
- 2026-05-16 PASS 7 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 2 minutes
- 2026-05-19

### Error 2026-05-19T01:43:06+00:00
```
2026-05-19T01:43:06.2982094Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-19T01:43:06.2982563Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-2848207826713700572
2026-05-19T01:43:06.2982934Z     resource_test.go:51: 
2026-05-19T01:43:06.2983632Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:43:06.2985241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:43:06.2986628Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:43:06.2987981Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-19T01:43:06.2989407Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-19T01:43:06.2990325Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:43:06.2990729Z         	Error:      	Received unexpected error:
2026-05-19T01:43:06.2992382Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.2993205Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-19T01:43:06.2994902Z         	Messages:   	Project creation failed: test-acc-tf-p-2848207826713700572, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:43:06.2995920Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (68.01s)
```

- 2026-05-20 PASS 25 minutes
- 2026-05-21

### Error 2026-05-21T02:03:03+00:00
```
2026-05-21T02:03:03.5916897Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-21T02:03:03.5917954Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-7361932032235065300
2026-05-21T02:03:03.5918675Z     resource_test.go:51: 
2026-05-21T02:03:03.5920069Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T02:03:03.5922975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T02:03:03.5926007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T02:03:03.5928812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-21T02:03:03.5932182Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-21T02:03:03.5934283Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T02:03:03.5935093Z         	Error:      	Received unexpected error:
2026-05-21T02:03:03.5938220Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.5939925Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-21T02:03:03.5942802Z         	Messages:   	Project creation failed: test-acc-tf-p-7361932032235065300, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T02:03:03.5944853Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (84.77s)
```

- 2026-05-22 PASS 11 minutes
- 2026-05-23 PASS 22 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 24 minutes
- 2026-05-26

### Error 2026-05-26T03:10:44+00:00
```
2026-05-26T03:10:44.9964395Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-26T03:10:44.9965001Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-4620743748654294712
2026-05-26T03:10:44.9965479Z     resource_test.go:51: 
2026-05-26T03:10:44.9966377Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:10:44.9968108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:10:44.9969824Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:10:44.9971703Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-26T03:10:44.9973594Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-26T03:10:44.9974765Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T03:10:44.9975271Z         	Error:      	Received unexpected error:
2026-05-26T03:10:44.9977337Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:44.9978433Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-26T03:10:44.9980158Z         	Messages:   	Project creation failed: test-acc-tf-p-4620743748654294712, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:10:44.9981323Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (63.35s)
```

- 2026-05-27 PASS 3 minutes
- 2026-05-28

### Error 2026-05-28T02:20:31+00:00
```
2026-05-28T02:20:31.2460385Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-28T02:20:31.2460972Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-428983721703673560
2026-05-28T02:20:31.2461437Z     resource_test.go:51: 
2026-05-28T02:20:31.2462491Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:20:31.2464225Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:20:31.2465952Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:20:31.2467667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-28T02:20:31.2469479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-28T02:20:31.2470641Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T02:20:31.2471171Z         	Error:      	Received unexpected error:
2026-05-28T02:20:31.2473391Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2474469Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-28T02:20:31.2476192Z         	Messages:   	Project creation failed: test-acc-tf-p-428983721703673560, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:20:31.2477349Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (62.43s)
```

- 2026-05-29 PASS 15 minutes
- 2026-05-30

### Error 2026-05-30T01:46:34+00:00
```
2026-05-30T01:46:34.9089725Z === RUN   TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-30T01:46:34.9090396Z     resource_test.go:51: Creating execution project (1): test-acc-tf-p-769685654498534818
2026-05-30T01:46:34.9091104Z     resource_test.go:51: 
2026-05-30T01:46:34.9092052Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:46:34.9093869Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:46:34.9095656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:46:34.9097436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-05-30T01:46:34.9099298Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:51
2026-05-30T01:46:34.9100669Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:46:34.9101235Z         	Error:      	Received unexpected error:
2026-05-30T01:46:34.9103241Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9104636Z         	Test:       	TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty
2026-05-30T01:46:34.9106460Z         	Messages:   	Project creation failed: test-acc-tf-p-769685654498534818, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:46:34.9107653Z --- FAIL: TestAccSearchIndexAPI_withSynonymsUpdatedToEmpty (73.11s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 14 minutes
- 2026-06-02 PASS 22 minutes
- 2026-06-03 PASS 7 minutes
- 2026-06-04 PASS 9 minutes
- 2026-06-05 PASS 41 minutes

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 minutes
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 24 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 17 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 24 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
