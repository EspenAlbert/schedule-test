# autogen_fast/streamconnectionapi/TestAccStreamConnectionAPI_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:57](#error-2026-07-09t0057290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.09s
[2026-07-11 00:54](#error-2026-07-11t0054310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-18 00:50](#error-2026-07-18t0050100000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.07s
[2026-07-21 00:53](#error-2026-07-21t0053060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.00s
[2026-07-23 00:48](#error-2026-07-23t0048440000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:57:29+00:00
```
2026-07-09T00:57:29.6779594Z === RUN   TestAccStreamConnectionAPI_basic
2026-07-09T00:57:29.6780212Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-5421508727308167588
2026-07-09T00:57:29.6780747Z     resource_test.go:18: 
2026-07-09T00:57:29.6781707Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:57:29.6783578Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:57:29.6785444Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:57:29.6787315Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T00:57:29.6789611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-07-09T00:57:29.6790915Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:57:29.6791490Z         	Error:      	Received unexpected error:
2026-07-09T00:57:29.6793501Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6794596Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-07-09T00:57:29.6796424Z         	Messages:   	Project creation failed: test-acc-tf-p-5421508727308167588, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:57:29.6797672Z --- FAIL: TestAccStreamConnectionAPI_basic (98.91s)
```

- 2026-07-10 PASS 25 seconds
- 2026-07-11

### Error 2026-07-11T00:54:31+00:00
```
2026-07-11T00:54:31.1864924Z === RUN   TestAccStreamConnectionAPI_basic
2026-07-11T00:54:31.1865554Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3610889066752910767
2026-07-11T00:54:31.1866432Z     resource_test.go:18: 
2026-07-11T00:54:31.1867522Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:54:31.1869410Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:54:31.1871287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:54:31.1873168Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T00:54:31.1875189Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-07-11T00:54:31.1876631Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:54:31.1877229Z         	Error:      	Received unexpected error:
2026-07-11T00:54:31.1879242Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1880356Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-07-11T00:54:31.1882193Z         	Messages:   	Project creation failed: test-acc-tf-p-3610889066752910767, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:54:31.1883457Z --- FAIL: TestAccStreamConnectionAPI_basic (62.45s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 25 seconds
- 2026-07-14 PASS 27 seconds
- 2026-07-15 PASS 26 seconds
- 2026-07-16 PASS 27 seconds
- 2026-07-17 PASS 28 seconds
- 2026-07-18

### Error 2026-07-18T00:50:10+00:00
```
2026-07-18T00:50:10.8292367Z === RUN   TestAccStreamConnectionAPI_basic
2026-07-18T00:50:10.8293023Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-3976515779658373297
2026-07-18T00:50:10.8293648Z     resource_test.go:18: 
2026-07-18T00:50:10.8294636Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:50:10.8296415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:50:10.8298054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:50:10.8299742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-18T00:50:10.8301555Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-07-18T00:50:10.8302855Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:50:10.8303505Z         	Error:      	Received unexpected error:
2026-07-18T00:50:10.8305424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8306440Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-07-18T00:50:10.8308080Z         	Messages:   	Project creation failed: test-acc-tf-p-3976515779658373297, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:50:10.8309326Z --- FAIL: TestAccStreamConnectionAPI_basic (96.66s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:06+00:00
```
2026-07-21T00:53:06.0299435Z === RUN   TestAccStreamConnectionAPI_basic
2026-07-21T00:53:06.0300080Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-6989766545802256521
2026-07-21T00:53:06.0300633Z     resource_test.go:18: 
2026-07-21T00:53:06.0301613Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:06.0303484Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:06.0305543Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:06.0307426Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:53:06.0309607Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-07-21T00:53:06.0310911Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:06.0311508Z         	Error:      	Received unexpected error:
2026-07-21T00:53:06.0313534Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0314779Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-07-21T00:53:06.0316765Z         	Messages:   	Project creation failed: test-acc-tf-p-6989766545802256521, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:06.0317980Z --- FAIL: TestAccStreamConnectionAPI_basic (63.00s)
```

- 2026-07-22 PASS 27 seconds
- 2026-07-23

### Error 2026-07-23T00:48:44+00:00
```
2026-07-23T00:48:44.7250421Z === RUN   TestAccStreamConnectionAPI_basic
2026-07-23T00:48:44.7250958Z     resource_test.go:18: Creating execution project (1): test-acc-tf-p-2553115156207452811
2026-07-23T00:48:44.7251405Z     resource_test.go:18: 
2026-07-23T00:48:44.7252154Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:48:44.7253677Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:48:44.7255106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:48:44.7256530Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-23T00:48:44.7258049Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/streamconnectionapi/resource_test.go:18
2026-07-23T00:48:44.7259051Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:48:44.7259515Z         	Error:      	Received unexpected error:
2026-07-23T00:48:44.7261756Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7262947Z         	Test:       	TestAccStreamConnectionAPI_basic
2026-07-23T00:48:44.7264784Z         	Messages:   	Project creation failed: test-acc-tf-p-2553115156207452811, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:48:44.7265993Z --- FAIL: TestAccStreamConnectionAPI_basic (0.45s)
```

- 2026-07-24 PASS 25 seconds
- 2026-07-25 PASS 28 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 26 seconds
- 2026-07-28 PASS 24 seconds
- 2026-07-29 PASS 24 seconds
- 2026-07-30 PASS 25 seconds
- 2026-07-31 PASS 25 seconds
- 2026-08-01 PASS 25 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 27 seconds
- 2026-08-04 PASS 24 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 24 seconds
- 2026-08-07 PASS 26 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 27 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 26 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 26 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 26 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 26 seconds
  - PASS 28 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 27 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
