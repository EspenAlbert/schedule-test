# stream/streamprocessor/TestAccStreamProcessor_withFailoverEnabled Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.07s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.04s
[2026-07-18 01:45](#error-2026-07-18t0145130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 97.01s
[2026-07-23 03:35](#error-2026-07-23t0335040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s
[2026-07-27 04:52](#error-2026-07-27t0452300000) |  | dev | timeout | 3600.07s
[2026-08-03 01:33](#error-2026-08-03t0133300000) |  | dev | flaky_client | 394.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.6195289Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-09T01:15:21.6195846Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-570204640195084432
2026-07-09T01:15:21.6196249Z     resource_test.go:59: 
2026-07-09T01:15:21.6196953Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.6198302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.6199650Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.6201113Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-09T01:15:21.6202521Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-09T01:15:21.6203446Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.6203868Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6205327Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6206218Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-09T01:15:21.6207561Z         	Messages:   	Project creation failed: test-acc-tf-p-570204640195084432, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6208479Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (65.68s)
```

- 2026-07-10 PASS 24 minutes
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7452451Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-11T01:30:51.7453601Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-3181402078125839647
2026-07-11T01:30:51.7454722Z     resource_test.go:59: 
2026-07-11T01:30:51.7456395Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7459982Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7463387Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7466789Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-11T01:30:51.7470543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-11T01:30:51.7473004Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7473979Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7477596Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7479744Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-11T01:30:51.7483041Z         	Messages:   	Project creation failed: test-acc-tf-p-3181402078125839647, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7485242Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (61.42s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 12 minutes
- 2026-07-14 PASS 12 minutes
- 2026-07-15 PASS 13 minutes
- 2026-07-16 PASS 41 minutes
- 2026-07-17 PASS 11 minutes
- 2026-07-18

### Error 2026-07-18T01:45:13+00:00
```
2026-07-18T01:45:13.0431382Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-18T01:45:13.0431994Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-686323165769138535
2026-07-18T01:45:13.0432506Z     resource_test.go:59: 
2026-07-18T01:45:13.0433437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T01:45:13.0435627Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T01:45:13.0437475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T01:45:13.0439323Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-18T01:45:13.0441656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-18T01:45:13.0443701Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T01:45:13.0444918Z         	Error:      	Received unexpected error:
2026-07-18T01:45:13.0448639Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0450640Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-18T01:45:13.0454022Z         	Messages:   	Project creation failed: test-acc-tf-p-686323165769138535, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T01:45:13.0456564Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (66.83s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3489542Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-21T00:59:13.3490159Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-515612418902730424
2026-07-21T00:59:13.3490667Z     resource_test.go:59: 
2026-07-21T00:59:13.3491598Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3493576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3495633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3497503Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-21T00:59:13.3499468Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-21T00:59:13.3500732Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3501283Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3503415Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3504537Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-21T00:59:13.3506382Z         	Messages:   	Project creation failed: test-acc-tf-p-515612418902730424, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3507647Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (97.12s)
```

- 2026-07-22 PASS 15 minutes
- 2026-07-23

### Error 2026-07-23T03:35:04+00:00
```
2026-07-23T03:35:04.6000099Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-23T03:35:04.6001098Z     resource_test.go:59: Creating execution project (1): test-acc-tf-p-3521066474467222837
2026-07-23T03:35:04.6001909Z     resource_test.go:59: 
2026-07-23T03:35:04.6003433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T03:35:04.6006458Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T03:35:04.6009633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T03:35:04.6012693Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:185
2026-07-23T03:35:04.6015881Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-23T03:35:04.6018267Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T03:35:04.6019133Z         	Error:      	Received unexpected error:
2026-07-23T03:35:04.6022382Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6024131Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-23T03:35:04.6027116Z         	Messages:   	Project creation failed: test-acc-tf-p-3521066474467222837, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T03:35:04.6029310Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (61.93s)
```

- 2026-07-24 PASS 20 minutes
- 2026-07-25 PASS 13 minutes
- 2026-07-26: MISSING
- 2026-07-27

### Error 2026-07-27T04:52:30+00:00
```
2026-07-27T04:52:30.3582987Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-07-27T04:52:30.3584085Z     resource_test.go:59: Creating execution cluster: test-acc-tf-c-8399214334669312412
2026-07-27T04:52:30.3585356Z     resource_test.go:59: 
2026-07-27T04:52:30.3587170Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-07-27T04:52:30.3590405Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-07-27T04:52:30.3601694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-07-27T04:52:30.3602639Z         	Error:      	Received unexpected error:
2026-07-27T04:52:30.3603559Z         	            	timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-07-27T04:52:30.3604227Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-07-27T04:52:30.3605284Z         	Messages:   	Cluster creation failed: test-acc-tf-c-8399214334669312412, err: timeout while waiting for state to become 'IDLE' (last state: 'CREATING', timeout: 1h0m0s)
2026-07-27T04:52:30.3606085Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (3600.70s)
```

- 2026-07-28 PASS 30 minutes
- 2026-07-29 PASS 13 minutes
- 2026-07-30 PASS 48 minutes
- 2026-07-31 PASS 13 minutes
- 2026-08-01 PASS 12 minutes
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 6 minutes

### Error 2026-08-03T01:33:30+00:00
```
2026-08-03T01:33:30.0170772Z === RUN   TestAccStreamProcessor_withFailoverEnabled
2026-08-03T01:33:30.0171355Z     resource_test.go:59: Creating execution cluster: test-acc-tf-c-7719357937481804030
2026-08-03T01:33:30.0171843Z     resource_test.go:59: 
2026-08-03T01:33:30.0172771Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:49
2026-08-03T01:33:30.0174877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-08-03T01:33:30.0176819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:59
2026-08-03T01:33:30.0177640Z         	Error:      	Received unexpected error:
2026-08-03T01:33:30.0179256Z         	            	Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/clusters/test-acc-tf-c-7719357937481804030": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0180360Z         	Test:       	TestAccStreamProcessor_withFailoverEnabled
2026-08-03T01:33:30.0182085Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7719357937481804030, err: Get "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe501aa9e3c145b667359/clusters/test-acc-tf-c-7719357937481804030": dial tcp 3.231.133.249:443: i/o timeout
2026-08-03T01:33:30.0183268Z --- FAIL: TestAccStreamProcessor_withFailoverEnabled (394.32s)
```

  - PASS 12 minutes
  - PASS 12 minutes
- 2026-08-04 PASS 12 minutes
- 2026-08-05 PASS 13 minutes
- 2026-08-06 PASS 12 minutes
- 2026-08-07 PASS 13 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 12 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 13 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 13 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 13 minutes
  - PASS 13 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 13 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
