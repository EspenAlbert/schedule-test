# config/thirdpartyintegration/TestAccThirdPartyIntegration_opsGenie Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:09](#error-2026-05-09t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.02s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.08s
[2026-05-30 01:10](#error-2026-05-30t0110400000) |  | dev | flaky_500 | 63.06s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 6 seconds
  - PASS 8 seconds
- 2026-05-08 PASS 9 seconds
- 2026-05-09

### Error 2026-05-09T01:09:46+00:00
```
2026-05-09T01:09:46.7664326Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-05-09T01:09:46.7664777Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-5229324299713648857
2026-05-09T01:09:46.7665145Z     resource_test.go:45: 
2026-05-09T01:09:46.7665828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:09:46.7667173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:09:46.7668493Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:09:46.7669926Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-05-09T01:09:46.7671381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-05-09T01:09:46.7672305Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:09:46.7672700Z         	Error:      	Received unexpected error:
2026-05-09T01:09:46.7674457Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7675235Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-05-09T01:09:46.7676573Z         	Messages:   	Project creation failed: test-acc-tf-p-5229324299713648857, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7677456Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (67.20s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 8 seconds
- 2026-05-12 PASS 8 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 7 seconds
- 2026-05-15 PASS 10 seconds
- 2026-05-16 PASS 7 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 9 seconds
- 2026-05-19 PASS 8 seconds
- 2026-05-20 PASS 8 seconds
- 2026-05-21 PASS 7 seconds
- 2026-05-22 PASS 8 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 8 seconds
- 2026-05-27 PASS 7 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5058408Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-05-28T01:03:18.5058986Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-1132628103305060667
2026-05-28T01:03:18.5059460Z     resource_test.go:45: 
2026-05-28T01:03:18.5060357Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5062415Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5064334Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5066260Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-05-28T01:03:18.5068248Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-05-28T01:03:18.5069456Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5069961Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5072981Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5074384Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-05-28T01:03:18.5076719Z         	Messages:   	Project creation failed: test-acc-tf-p-1132628103305060667, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5078261Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (0.80s)
```

- 2026-05-29 PASS 9 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.6185482Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-05-30T01:10:40.6186095Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-3556382162747490082
2026-05-30T01:10:40.6186605Z     resource_test.go:45: 
2026-05-30T01:10:40.6187702Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.6189566Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.6191349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.6193272Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-05-30T01:10:40.6195234Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-05-30T01:10:40.6196650Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:10:40.6197201Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.6198299Z         	            	(503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:10:40.6198957Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-05-30T01:10:40.6200053Z         	Messages:   	Project creation failed: test-acc-tf-p-3556382162747490082, err: (503 Service Unavailable) failed to decode response body: undefined response type
2026-05-30T01:10:40.6200823Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (63.58s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 9 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0479322Z === RUN   TestAccThirdPartyIntegration_opsGenie
2026-06-02T01:16:14.0479792Z     resource_test.go:45: Creating execution project (1): test-acc-tf-p-5326383472133584060
2026-06-02T01:16:14.0480185Z     resource_test.go:45: 
2026-06-02T01:16:14.0480901Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0482440Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0483839Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0485337Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:110
2026-06-02T01:16:14.0486899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:45
2026-06-02T01:16:14.0487849Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:16:14.0488270Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0489769Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0490578Z         	Test:       	TestAccThirdPartyIntegration_opsGenie
2026-06-02T01:16:14.0492092Z         	Messages:   	Project creation failed: test-acc-tf-p-5326383472133584060, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0493164Z --- FAIL: TestAccThirdPartyIntegration_opsGenie (73.10s)
```

- 2026-06-03 PASS 9 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 10 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 8 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 8 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
