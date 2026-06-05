# autogen_fast/streamconnectionapi/TestAccStreamConnectionAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.04s
[2026-05-21 01:10](#error-2026-05-21t0110440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-05-28 01:01](#error-2026-05-28t0101530000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-05-30 01:11](#error-2026-05-30t0111190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.02s
[2026-06-02 01:16](#error-2026-06-02t0116400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.04s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 26 seconds
- 2026-05-08 PASS 25 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3290701Z === RUN   TestAccStreamConnectionAPI_basic
2026-05-09T01:07:49.3291308Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3909516856113477203
2026-05-09T01:07:49.3291831Z     resource_test.go:18: 
2026-05-09T01:07:49.3292781Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3294669Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3296548Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3298728Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:07:49.3300766Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-05-09T01:07:49.3302051Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:07:49.3302612Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3304631Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3305723Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-05-09T01:07:49.3307802Z         	Messages:   	Project creation failed: test-acc-tf-p-3909516856113477203, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3309046Z --- FAIL: TestAccStreamConnectionAPI_basic (71.40s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 25 seconds
- 2026-05-12 PASS 26 seconds
- 2026-05-13 PASS 25 seconds
- 2026-05-14 PASS 26 seconds
- 2026-05-15 PASS 26 seconds
- 2026-05-16 PASS a minute
- 2026-05-17: MISSING
- 2026-05-18 PASS 26 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 26 seconds
- 2026-05-21

### Error 2026-05-21T01:10:44+00:00
```
2026-05-21T01:10:44.0067040Z === RUN   TestAccStreamConnectionAPI_basic
2026-05-21T01:10:44.0068299Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3350571746731428734
2026-05-21T01:10:44.0069220Z     resource_test.go:18: 
2026-05-21T01:10:44.0070954Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:10:44.0074391Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:10:44.0077929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:10:44.0081139Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-21T01:10:44.0084607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-05-21T01:10:44.0086941Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:10:44.0088147Z         	Error:      	Received unexpected error:
2026-05-21T01:10:44.0091819Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:44.0093748Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-05-21T01:10:44.0097125Z         	Messages:   	Project creation failed: test-acc-tf-p-3350571746731428734, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:10:44.0099546Z --- FAIL: TestAccStreamConnectionAPI_basic (62.43s)
```

- 2026-05-22 PASS 28 seconds
- 2026-05-23 PASS 30 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 25 seconds
- 2026-05-26 PASS 26 seconds
- 2026-05-27 PASS 25 seconds
- 2026-05-28

### Error 2026-05-28T01:01:53+00:00
```
2026-05-28T01:01:53.8887221Z === RUN   TestAccStreamConnectionAPI_basic
2026-05-28T01:01:53.8887795Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-7566150361367039563
2026-05-28T01:01:53.8888283Z     resource_test.go:18: 
2026-05-28T01:01:53.8889189Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:53.8890993Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:53.8902855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:53.8905319Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T01:01:53.8907219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-05-28T01:01:53.8908388Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:01:53.8908945Z         	Error:      	Received unexpected error:
2026-05-28T01:01:53.8911704Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8913049Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-05-28T01:01:53.8915147Z         	Messages:   	Project creation failed: test-acc-tf-p-7566150361367039563, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:01:53.8916599Z --- FAIL: TestAccStreamConnectionAPI_basic (1.01s)
```

- 2026-05-29 PASS 26 seconds
- 2026-05-30

### Error 2026-05-30T01:11:19+00:00
```
2026-05-30T01:11:19.0436879Z === RUN   TestAccStreamConnectionAPI_basic
2026-05-30T01:11:19.0437607Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3092760698586172116
2026-05-30T01:11:19.0438260Z     resource_test.go:18: 
2026-05-30T01:11:19.0439433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:11:19.0441311Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:11:19.0443320Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:11:19.0445179Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T01:11:19.0447157Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-05-30T01:11:19.0448681Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:11:19.0449401Z         	Error:      	Received unexpected error:
2026-05-30T01:11:19.0451879Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0453277Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-05-30T01:11:19.0455366Z         	Messages:   	Project creation failed: test-acc-tf-p-3092760698586172116, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:11:19.0456813Z --- FAIL: TestAccStreamConnectionAPI_basic (64.16s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 25 seconds
- 2026-06-02

### Error 2026-06-02T01:16:40+00:00
```
2026-06-02T01:16:40.1264441Z === RUN   TestAccStreamConnectionAPI_basic
2026-06-02T01:16:40.1265087Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-375496629679696911
2026-06-02T01:16:40.1265652Z     resource_test.go:18: 
2026-06-02T01:16:40.1266634Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:40.1268456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:40.1270302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:40.1272117Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:16:40.1274243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-06-02T01:16:40.1275553Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:16:40.1276165Z         	Error:      	Received unexpected error:
2026-06-02T01:16:40.1278298Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1279509Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-06-02T01:16:40.1281293Z         	Messages:   	Project creation failed: test-acc-tf-p-375496629679696911, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:40.1282533Z --- FAIL: TestAccStreamConnectionAPI_basic (65.41s)
```

- 2026-06-03 PASS 28 seconds
- 2026-06-04 PASS 27 seconds
- 2026-06-05 PASS 26 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 26 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 26 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 26 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 27 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
