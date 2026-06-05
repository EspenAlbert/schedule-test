# config/thirdpartyintegration/TestAccThirdPartyIntegration_basicPagerDuty Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 27) FAIL(x 4)
Success rate: 87.10%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:09](#error-2026-05-09t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 122.09s
[2026-05-28 01:03](#error-2026-05-28t0103180000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s
[2026-06-02 01:16](#error-2026-06-02t0116140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 9 seconds
  - PASS 9 seconds
- 2026-05-08 PASS 4 seconds
- 2026-05-09

### Error 2026-05-09T01:09:46+00:00
```
2026-05-09T01:09:46.7646198Z === RUN   TestAccThirdPartyIntegration_basicPagerDuty
2026-05-09T01:09:46.7646909Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-1921799778180101851
2026-05-09T01:09:46.7647448Z     resource_test.go:41: 
2026-05-09T01:09:46.7648517Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:09:46.7650651Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:09:46.7652734Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:09:46.7655219Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:71
2026-05-09T01:09:46.7657648Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:41
2026-05-09T01:09:46.7658561Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:09:46.7658957Z         	Error:      	Received unexpected error:
2026-05-09T01:09:46.7660424Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7661270Z         	Test:       	TestAccThirdPartyIntegration_basicPagerDuty
2026-05-09T01:09:46.7662578Z         	Messages:   	Project creation failed: test-acc-tf-p-1921799778180101851, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:09:46.7663991Z --- FAIL: TestAccThirdPartyIntegration_basicPagerDuty (122.91s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 7 seconds
- 2026-05-12 PASS 9 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 10 seconds
- 2026-05-15 PASS 7 seconds
- 2026-05-16 PASS 8 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19 PASS 44 seconds
- 2026-05-20 PASS 7 seconds
- 2026-05-21 PASS 10 seconds
- 2026-05-22 PASS 7 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 16 seconds
- 2026-05-27 PASS 6 seconds
- 2026-05-28

### Error 2026-05-28T01:03:18+00:00
```
2026-05-28T01:03:18.5037954Z === RUN   TestAccThirdPartyIntegration_basicPagerDuty
2026-05-28T01:03:18.5038542Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-8206190686313091483
2026-05-28T01:03:18.5039027Z     resource_test.go:41: 
2026-05-28T01:03:18.5039945Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:03:18.5041944Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:03:18.5043733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:03:18.5045660Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:71
2026-05-28T01:03:18.5047641Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:41
2026-05-28T01:03:18.5048925Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T01:03:18.5049428Z         	Error:      	Received unexpected error:
2026-05-28T01:03:18.5052482Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5054074Z         	Test:       	TestAccThirdPartyIntegration_basicPagerDuty
2026-05-28T01:03:18.5056435Z         	Messages:   	Project creation failed: test-acc-tf-p-8206190686313091483, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T01:03:18.5057999Z --- FAIL: TestAccThirdPartyIntegration_basicPagerDuty (0.44s)
```

- 2026-05-29 PASS 4 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.6165229Z === RUN   TestAccThirdPartyIntegration_basicPagerDuty
2026-05-30T01:10:40.6166282Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-3551923787395655782
2026-05-30T01:10:40.6167162Z     resource_test.go:41: 
2026-05-30T01:10:40.6169217Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.6171206Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.6172990Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.6174906Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:71
2026-05-30T01:10:40.6176848Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:41
2026-05-30T01:10:40.6178453Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:10:40.6179026Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.6180985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.6182070Z         	Test:       	TestAccThirdPartyIntegration_basicPagerDuty
2026-05-30T01:10:40.6183847Z         	Messages:   	Project creation failed: test-acc-tf-p-3551923787395655782, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.6185021Z --- FAIL: TestAccThirdPartyIntegration_basicPagerDuty (65.31s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02

### Error 2026-06-02T01:16:14+00:00
```
2026-06-02T01:16:14.0464945Z === RUN   TestAccThirdPartyIntegration_basicPagerDuty
2026-06-02T01:16:14.0465602Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-9055428992687709379
2026-06-02T01:16:14.0466003Z     resource_test.go:41: 
2026-06-02T01:16:14.0466719Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:16:14.0468106Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:16:14.0469494Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:16:14.0470984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:71
2026-06-02T01:16:14.0472663Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:41
2026-06-02T01:16:14.0473625Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:16:14.0474047Z         	Error:      	Received unexpected error:
2026-06-02T01:16:14.0475667Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0476514Z         	Test:       	TestAccThirdPartyIntegration_basicPagerDuty
2026-06-02T01:16:14.0478033Z         	Messages:   	Project creation failed: test-acc-tf-p-9055428992687709379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:16:14.0478968Z --- FAIL: TestAccThirdPartyIntegration_basicPagerDuty (92.58s)
```

- 2026-06-03 PASS 7 seconds
- 2026-06-04 PASS 9 seconds
- 2026-06-05 PASS 5 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 7 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 7 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 5 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
