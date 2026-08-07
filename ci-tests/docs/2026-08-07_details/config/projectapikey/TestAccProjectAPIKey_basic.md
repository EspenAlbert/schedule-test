# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.06s
[2026-07-16 00:49](#error-2026-07-16t0049140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.02s
[2026-07-18 00:51](#error-2026-07-18t0051550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.02s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2343127Z === RUN   TestAccProjectAPIKey_basic
2026-07-09T00:59:33.2343764Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-6774157453369525954
2026-07-09T00:59:33.2344354Z     resource_project_api_key_test.go:28: 
2026-07-09T00:59:33.2345437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2347302Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2349290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2351360Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-09T00:59:33.2353520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-09T00:59:33.2354901Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:59:33.2355554Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2357573Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2358614Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-09T00:59:33.2360407Z         	Messages:   	Project creation failed: test-acc-tf-p-6774157453369525954, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2361595Z --- FAIL: TestAccProjectAPIKey_basic (62.72s)
```

- 2026-07-10 PASS 20 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6090079Z === RUN   TestAccProjectAPIKey_basic
2026-07-11T00:55:51.6091238Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-5160667648349064287
2026-07-11T00:55:51.6091855Z     resource_project_api_key_test.go:28: 
2026-07-11T00:55:51.6092844Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6094722Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6096618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6098894Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-11T00:55:51.6101307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-11T00:55:51.6102621Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6103161Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6105202Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6106244Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-11T00:55:51.6108196Z         	Messages:   	Project creation failed: test-acc-tf-p-5160667648349064287, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6109386Z --- FAIL: TestAccProjectAPIKey_basic (64.57s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS 16 seconds
- 2026-07-15 PASS 10 seconds
- 2026-07-16

### Error 2026-07-16T00:49:14+00:00
```
2026-07-16T00:49:14.1136123Z === RUN   TestAccProjectAPIKey_basic
2026-07-16T00:49:14.1137313Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-3573881293951913459
2026-07-16T00:49:14.1138276Z     resource_project_api_key_test.go:28: 
2026-07-16T00:49:14.1139902Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:14.1143098Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:14.1146087Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:14.1148055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-16T00:49:14.1150108Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-16T00:49:14.1151777Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:49:14.1152329Z         	Error:      	Received unexpected error:
2026-07-16T00:49:14.1154261Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1155266Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-16T00:49:14.1156958Z         	Messages:   	Project creation failed: test-acc-tf-p-3573881293951913459, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1158071Z --- FAIL: TestAccProjectAPIKey_basic (81.23s)
```

- 2026-07-17 PASS 11 seconds
- 2026-07-18

### Error 2026-07-18T00:51:55+00:00
```
2026-07-18T00:51:55.3163784Z === RUN   TestAccProjectAPIKey_basic
2026-07-18T00:51:55.3165072Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-6320381353034523722
2026-07-18T00:51:55.3166157Z     resource_project_api_key_test.go:28: 
2026-07-18T00:51:55.3167895Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:55.3173748Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:55.3177243Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:55.3181812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-18T00:51:55.3186137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-18T00:51:55.3188515Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:51:55.3189454Z         	Error:      	Received unexpected error:
2026-07-18T00:51:55.3193631Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3195500Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-18T00:51:55.3198772Z         	Messages:   	Project creation failed: test-acc-tf-p-6320381353034523722, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3200829Z --- FAIL: TestAccProjectAPIKey_basic (102.22s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4193058Z === RUN   TestAccProjectAPIKey_basic
2026-07-21T00:53:42.4193531Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-6875564860207251158
2026-07-21T00:53:42.4193919Z     resource_project_api_key_test.go:28: 
2026-07-21T00:53:42.4194535Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4195696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4196858Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4198128Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-21T00:53:42.4199545Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-21T00:53:42.4200359Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:53:42.4200718Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4201981Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4202622Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-21T00:53:42.4203707Z         	Messages:   	Project creation failed: test-acc-tf-p-6875564860207251158, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4204438Z --- FAIL: TestAccProjectAPIKey_basic (62.69s)
```

- 2026-07-22 PASS 11 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4706157Z === RUN   TestAccProjectAPIKey_basic
2026-07-23T00:49:05.4706773Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-2474070640623594505
2026-07-23T00:49:05.4707312Z     resource_project_api_key_test.go:28: 
2026-07-23T00:49:05.4708150Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4709676Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4711268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4712956Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-07-23T00:49:05.4714626Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-07-23T00:49:05.4715749Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:49:05.4716273Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4718560Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4719661Z         	Test:       	TestAccProjectAPIKey_basic
2026-07-23T00:49:05.4721780Z         	Messages:   	Project creation failed: test-acc-tf-p-2474070640623594505, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4722984Z --- FAIL: TestAccProjectAPIKey_basic (0.46s)
```

- 2026-07-24 PASS 16 seconds
- 2026-07-25 PASS 13 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 27 seconds
- 2026-07-28 PASS 11 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 10 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 17 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 7 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 15 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
