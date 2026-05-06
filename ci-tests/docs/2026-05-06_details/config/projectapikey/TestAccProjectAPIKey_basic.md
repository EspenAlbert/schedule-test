# config/projectapikey/TestAccProjectAPIKey_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 31) FAIL(x 4)
Success rate: 88.57%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:43](#error-2026-04-09t0043550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-04-11 00:48](#error-2026-04-11t0048500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 84.09s
[2026-04-30 01:01](#error-2026-04-30t0101370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.09s
[2026-05-05 00:56](#error-2026-05-05t0056190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 13 seconds
- 2026-04-08 PASS 11 seconds
- 2026-04-09

### Error 2026-04-09T00:43:55+00:00
```
2026-04-09T00:43:55.9898188Z === RUN   TestAccProjectAPIKey_basic
2026-04-09T00:43:55.9899212Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-3155593046068542501
2026-04-09T00:43:55.9900035Z     resource_project_api_key_test.go:28: 
2026-04-09T00:43:55.9901557Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T00:43:55.9904401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T00:43:55.9906154Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T00:43:55.9908370Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-04-09T00:43:55.9910372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-04-09T00:43:55.9911607Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T00:43:55.9912140Z         	Error:      	Received unexpected error:
2026-04-09T00:43:55.9914077Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:55.9915099Z         	Test:       	TestAccProjectAPIKey_basic
2026-04-09T00:43:55.9916787Z         	Messages:   	Project creation failed: test-acc-tf-p-3155593046068542501, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:43:55.9918136Z --- FAIL: TestAccProjectAPIKey_basic (63.31s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:48:50+00:00
```
2026-04-11T00:48:50.5574978Z === RUN   TestAccProjectAPIKey_basic
2026-04-11T00:48:50.5576183Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-5757319361832209250
2026-04-11T00:48:50.5577583Z     resource_project_api_key_test.go:28: 
2026-04-11T00:48:50.5579213Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:48:50.5582418Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:48:50.5585590Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:48:50.5589200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-04-11T00:48:50.5592877Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-04-11T00:48:50.5595044Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:48:50.5595921Z         	Error:      	Received unexpected error:
2026-04-11T00:48:50.5599352Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:50.5601060Z         	Test:       	TestAccProjectAPIKey_basic
2026-04-11T00:48:50.5604280Z         	Messages:   	Project creation failed: test-acc-tf-p-5757319361832209250, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:48:50.5606230Z --- FAIL: TestAccProjectAPIKey_basic (84.87s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 10 seconds
- 2026-04-14 PASS 12 seconds
- 2026-04-15 PASS 15 seconds
- 2026-04-16 PASS 17 seconds
- 2026-04-17 PASS 20 seconds
- 2026-04-18 PASS 15 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 15 seconds
- 2026-04-21 PASS 15 seconds
- 2026-04-22 PASS 10 seconds
- 2026-04-23 PASS 15 seconds
- 2026-04-24 PASS 16 seconds
- 2026-04-25 PASS 15 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 14 seconds
- 2026-04-28 PASS 16 seconds
- 2026-04-29 PASS 18 seconds
- 2026-04-30

### Error 2026-04-30T01:01:37+00:00
```
2026-04-30T01:01:37.5061142Z === RUN   TestAccProjectAPIKey_basic
2026-04-30T01:01:37.5089919Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-1505551660321043612
2026-04-30T01:01:37.5101105Z     resource_project_api_key_test.go:28: 
2026-04-30T01:01:37.5111592Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:37.5114872Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:37.5118122Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:37.5121949Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-04-30T01:01:37.5125789Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-04-30T01:01:37.5128149Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:01:37.5129182Z         	Error:      	Received unexpected error:
2026-04-30T01:01:37.5133457Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:37.5135448Z         	Test:       	TestAccProjectAPIKey_basic
2026-04-30T01:01:37.5204173Z         	Messages:   	Project creation failed: test-acc-tf-p-1505551660321043612, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:37.5208426Z --- FAIL: TestAccProjectAPIKey_basic (73.92s)
```

- 2026-05-01 PASS 10 seconds
- 2026-05-02 PASS 15 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05

### Error 2026-05-05T00:56:19+00:00
```
2026-05-05T00:56:19.5723246Z === RUN   TestAccProjectAPIKey_basic
2026-05-05T00:56:19.5724325Z     resource_project_api_key_test.go:28: Creating execution project (1): test-acc-tf-p-3552457385110661527
2026-05-05T00:56:19.5725371Z     resource_project_api_key_test.go:28: 
2026-05-05T00:56:19.5727142Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:56:19.5730237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:56:19.5732549Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:56:19.5734759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:34
2026-05-05T00:56:19.5737060Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:28
2026-05-05T00:56:19.5738413Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T00:56:19.5738958Z         	Error:      	Received unexpected error:
2026-05-05T00:56:19.5741034Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:56:19.5742350Z         	Test:       	TestAccProjectAPIKey_basic
2026-05-05T00:56:19.5744121Z         	Messages:   	Project creation failed: test-acc-tf-p-3552457385110661527, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:56:19.5745294Z --- FAIL: TestAccProjectAPIKey_basic (65.28s)
```

- 2026-05-06 PASS 15 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 7 seconds
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
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 10 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 11 seconds
- 2026-05-04 PASS 14 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 17 seconds
