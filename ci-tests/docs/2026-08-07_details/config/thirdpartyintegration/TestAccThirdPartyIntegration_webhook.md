# config/thirdpartyintegration/TestAccThirdPartyIntegration_webhook Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-07-09 01:01](#error-2026-07-09t0101370000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.03s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.03s
[2026-07-21 00:54](#error-2026-07-21t0054520000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.04s
[2026-07-23 00:52](#error-2026-07-23t0052320000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.07s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:01:37+00:00
```
2026-07-09T01:01:37.8035645Z === RUN   TestAccThirdPartyIntegration_webhook
2026-07-09T01:01:37.8036239Z     resource_test.go:65: Creating execution project (1): test-acc-tf-p-3906854455781147219
2026-07-09T01:01:37.8036739Z     resource_test.go:65: 
2026-07-09T01:01:37.8037668Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:01:37.8039536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:01:37.8041395Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:01:37.8043402Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:354
2026-07-09T01:01:37.8045608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:65
2026-07-09T01:01:37.8046868Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:01:37.8047398Z         	Error:      	Received unexpected error:
2026-07-09T01:01:37.8050317Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.8051745Z         	Test:       	TestAccThirdPartyIntegration_webhook
2026-07-09T01:01:37.8054295Z         	Messages:   	Project creation failed: test-acc-tf-p-3906854455781147219, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T01:01:37.8056009Z --- FAIL: TestAccThirdPartyIntegration_webhook (1.35s)
```

- 2026-07-10 PASS 8 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6411051Z === RUN   TestAccThirdPartyIntegration_webhook
2026-07-11T00:55:51.6411657Z     resource_test.go:65: Creating execution project (1): test-acc-tf-p-4699668965418782999
2026-07-11T00:55:51.6412158Z     resource_test.go:65: 
2026-07-11T00:55:51.6413095Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6414980Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6416866Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6419053Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:354
2026-07-11T00:55:51.6421144Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:65
2026-07-11T00:55:51.6422415Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:55:51.6422947Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6425918Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6427517Z         	Test:       	TestAccThirdPartyIntegration_webhook
2026-07-11T00:55:51.6430081Z         	Messages:   	Project creation failed: test-acc-tf-p-4699668965418782999, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6431658Z --- FAIL: TestAccThirdPartyIntegration_webhook (0.34s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 7 seconds
- 2026-07-14 PASS 9 seconds
- 2026-07-15 PASS 8 seconds
- 2026-07-16 PASS 9 seconds
- 2026-07-17 PASS 10 seconds
- 2026-07-18 PASS 9 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:54:52+00:00
```
2026-07-21T00:54:52.7311889Z === RUN   TestAccThirdPartyIntegration_webhook
2026-07-21T00:54:52.7312392Z     resource_test.go:65: Creating execution project (1): test-acc-tf-p-677513176560135453
2026-07-21T00:54:52.7312866Z     resource_test.go:65: 
2026-07-21T00:54:52.7313572Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:54:52.7314856Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:54:52.7316114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:54:52.7317490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:354
2026-07-21T00:54:52.7318970Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:65
2026-07-21T00:54:52.7319864Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:54:52.7320311Z         	Error:      	Received unexpected error:
2026-07-21T00:54:52.7322301Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7323290Z         	Test:       	TestAccThirdPartyIntegration_webhook
2026-07-21T00:54:52.7324877Z         	Messages:   	Project creation failed: test-acc-tf-p-677513176560135453, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:54:52.7325946Z --- FAIL: TestAccThirdPartyIntegration_webhook (0.41s)
```

- 2026-07-22 PASS 9 seconds
- 2026-07-23

### Error 2026-07-23T00:52:32+00:00
```
2026-07-23T00:52:32.2687461Z === RUN   TestAccThirdPartyIntegration_webhook
2026-07-23T00:52:32.2688111Z     resource_test.go:65: Creating execution project (1): test-acc-tf-p-2649062067692682651
2026-07-23T00:52:32.2688622Z     resource_test.go:65: 
2026-07-23T00:52:32.2689438Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:52:32.2691059Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:52:32.2692581Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:52:32.2694264Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:354
2026-07-23T00:52:32.2695922Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/thirdpartyintegration/resource_test.go:65
2026-07-23T00:52:32.2697030Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:52:32.2697568Z         	Error:      	Received unexpected error:
2026-07-23T00:52:32.2699883Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2702109Z         	Test:       	TestAccThirdPartyIntegration_webhook
2026-07-23T00:52:32.2704027Z         	Messages:   	Project creation failed: test-acc-tf-p-2649062067692682651, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:52:32.2705296Z --- FAIL: TestAccThirdPartyIntegration_webhook (0.70s)
```

- 2026-07-24 PASS 8 seconds
- 2026-07-25 PASS 5 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 7 seconds
- 2026-07-28 PASS 6 seconds
- 2026-07-29 PASS 7 seconds
- 2026-07-30 PASS 4 seconds
- 2026-07-31 PASS 8 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 8 seconds
- 2026-08-04 PASS 5 seconds
- 2026-08-05 PASS 9 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 7 seconds

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
- 2026-07-19 PASS 9 seconds
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
  - PASS 4 seconds
  - PASS 10 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 8 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
