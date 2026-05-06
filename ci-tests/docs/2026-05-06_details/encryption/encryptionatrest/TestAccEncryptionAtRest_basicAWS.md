# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 29) FAIL(x 5)
Success rate: 85.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 00:46](#error-2026-04-07t0046570000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.04s
[2026-04-25 00:48](#error-2026-04-25t0048110000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-04-28 00:55](#error-2026-04-28t0055310000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.08s
[2026-04-30 00:57](#error-2026-04-30t0057120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-05 00:53](#error-2026-05-05t0053500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T00:46:57+00:00
```
2026-04-07T00:46:57.5178902Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-04-07T00:46:57.5180196Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-779986621671685805
2026-04-07T00:46:57.5183379Z     resource_test.go:30: 
2026-04-07T00:46:57.5185264Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-07T00:46:57.5189460Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-07T00:46:57.5194085Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-07T00:46:57.5197845Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-04-07T00:46:57.5201505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-04-07T00:46:57.5202792Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-07T00:46:57.5203349Z         	Error:      	Received unexpected error:
2026-04-07T00:46:57.5205334Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:57.5206449Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-04-07T00:46:57.5208261Z         	Messages:   	Project creation failed: test-acc-tf-p-779986621671685805, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-07T00:46:57.5209847Z --- FAIL: TestAccEncryptionAtRest_basicAWS (67.44s)
```

- 2026-04-08 PASS a minute
- 2026-04-09 PASS a minute
- 2026-04-10 PASS a minute
- 2026-04-11 PASS 2 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS a minute
- 2026-04-14 PASS a minute
- 2026-04-15 PASS a minute
- 2026-04-16 PASS a minute
- 2026-04-17 PASS a minute
- 2026-04-18 PASS 2 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS a minute
- 2026-04-21 PASS a minute
- 2026-04-22 PASS a minute
- 2026-04-23 PASS a minute
- 2026-04-24 PASS a minute
- 2026-04-25

### Error 2026-04-25T00:48:11+00:00
```
2026-04-25T00:48:11.9845483Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-04-25T00:48:11.9846560Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-6558695102181976534
2026-04-25T00:48:11.9849829Z     resource_test.go:30: 
2026-04-25T00:48:11.9850825Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-25T00:48:11.9852984Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-25T00:48:11.9854789Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-25T00:48:11.9856678Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-04-25T00:48:11.9858714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-04-25T00:48:11.9859938Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-25T00:48:11.9860481Z         	Error:      	Received unexpected error:
2026-04-25T00:48:11.9862812Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:11.9863916Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-04-25T00:48:11.9865639Z         	Messages:   	Project creation failed: test-acc-tf-p-6558695102181976534, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:48:11.9866782Z --- FAIL: TestAccEncryptionAtRest_basicAWS (63.35s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS a minute
- 2026-04-28

### Error 2026-04-28T00:55:31+00:00
```
2026-04-28T00:55:31.6726159Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-04-28T00:55:31.6727294Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-3871817439338349143
2026-04-28T00:55:31.6728074Z     resource_test.go:30: 
2026-04-28T00:55:31.6729091Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-28T00:55:31.6731526Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-28T00:55:31.6733523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-28T00:55:31.6735604Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-04-28T00:55:31.6737630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-04-28T00:55:31.6738842Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-28T00:55:31.6739373Z         	Error:      	Received unexpected error:
2026-04-28T00:55:31.6741614Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:55:31.6742701Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-04-28T00:55:31.6744467Z         	Messages:   	Project creation failed: test-acc-tf-p-3871817439338349143, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-28T00:55:31.6745701Z --- FAIL: TestAccEncryptionAtRest_basicAWS (65.79s)
```

- 2026-04-29 PASS a minute
- 2026-04-30

### Error 2026-04-30T00:57:12+00:00
```
2026-04-30T00:57:12.0238043Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-04-30T00:57:12.0238855Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-4600276524948821990
2026-04-30T00:57:12.0239431Z     resource_test.go:30: 
2026-04-30T00:57:12.0240475Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T00:57:12.0242750Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T00:57:12.0245196Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T00:57:12.0247479Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-04-30T00:57:12.0249931Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-04-30T00:57:12.0251067Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T00:57:12.0251517Z         	Error:      	Received unexpected error:
2026-04-30T00:57:12.0253082Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:12.0254480Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-04-30T00:57:12.0257153Z         	Messages:   	Project creation failed: test-acc-tf-p-4600276524948821990, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:57:12.0258744Z --- FAIL: TestAccEncryptionAtRest_basicAWS (61.62s)
```

- 2026-05-01 PASS a minute
- 2026-05-02 PASS 2 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS a minute
- 2026-05-05

### Error 2026-05-05T00:53:50+00:00
```
2026-05-05T00:53:50.5526901Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-05-05T00:53:50.5527956Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-4787340935315123477
2026-05-05T00:53:50.5528931Z     resource_test.go:30: 
2026-05-05T00:53:50.5530437Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:53:50.5534074Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:53:50.5537667Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:53:50.5541640Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-05-05T00:53:50.5545528Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-05-05T00:53:50.5546820Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T00:53:50.5547378Z         	Error:      	Received unexpected error:
2026-05-05T00:53:50.5549393Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:50.5550556Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-05-05T00:53:50.5552374Z         	Messages:   	Project creation failed: test-acc-tf-p-4787340935315123477, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:53:50.5553905Z --- FAIL: TestAccEncryptionAtRest_basicAWS (68.92s)
```

- 2026-05-06 PASS a minute

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS a minute
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS a minute
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS a minute
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS a minute
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a minute
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS a minute
- 2026-05-04 PASS a minute
- 2026-05-05: MISSING
- 2026-05-06 PASS a minute
