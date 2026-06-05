# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 23) FAIL(x 7)
Success rate: 76.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-14 01:07](#error-2026-05-14t0107320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-19 01:03](#error-2026-05-19t0103050000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 71.04s
[2026-05-23 01:01](#error-2026-05-23t0101360000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-05-26 02:10](#error-2026-05-26t0210500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 76.06s
[2026-05-30 01:02](#error-2026-05-30t0102520000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-06-02 01:09](#error-2026-06-02t0109460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.07s
[2026-06-05 01:12](#error-2026-06-05t0112270000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6a2220e242e1e504cd7b07b6/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 4.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 3 minutes
- 2026-05-08 PASS 3 minutes
- 2026-05-09 PASS 7 minutes
- 2026-05-10: MISSING
- 2026-05-11 PASS 3 minutes
- 2026-05-12 PASS 3 minutes
- 2026-05-13 PASS 3 minutes
- 2026-05-14

### Error 2026-05-14T01:07:32+00:00
```
2026-05-14T01:07:32.8844790Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-14T01:07:32.8846198Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-6173088955388923445
2026-05-14T01:07:32.8846960Z     resource_test.go:43: 
2026-05-14T01:07:32.8848334Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-14T01:07:32.8851456Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-14T01:07:32.8854583Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-14T01:07:32.8857623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-14T01:07:32.8861162Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-14T01:07:32.8862515Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-14T01:07:32.8863203Z         	Error:      	Received unexpected error:
2026-05-14T01:07:32.8865164Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:07:32.8866537Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-14T01:07:32.8868382Z         	Messages:   	Project creation failed: test-acc-tf-p-6173088955388923445, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:07:32.8869629Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (61.57s)
```

- 2026-05-15 PASS 3 minutes
- 2026-05-16 PASS 4 minutes
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 minutes
- 2026-05-19

### Error 2026-05-19T01:03:05+00:00
```
2026-05-19T01:03:05.9338258Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-19T01:03:05.9339687Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-6900055849035919374
2026-05-19T01:03:05.9342466Z     resource_test.go:43: 
2026-05-19T01:03:05.9344058Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:03:05.9347161Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:03:05.9351478Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:03:05.9355068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-19T01:03:05.9358685Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-19T01:03:05.9360975Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-19T01:03:05.9361849Z         	Error:      	Received unexpected error:
2026-05-19T01:03:05.9365204Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:05.9367283Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-19T01:03:05.9370819Z         	Messages:   	Project creation failed: test-acc-tf-p-6900055849035919374, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:03:05.9372835Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (71.43s)
```

- 2026-05-20 PASS 3 minutes
- 2026-05-21 PASS 4 minutes
- 2026-05-22 PASS 3 minutes
- 2026-05-23

### Error 2026-05-23T01:01:36+00:00
```
2026-05-23T01:01:36.2205520Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-23T01:01:36.2206156Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-3780560506785434092
2026-05-23T01:01:36.2206662Z     resource_test.go:43: 
2026-05-23T01:01:36.2207596Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:01:36.2209471Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:01:36.2211589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:01:36.2213712Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-23T01:01:36.2215948Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-23T01:01:36.2217305Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T01:01:36.2217847Z         	Error:      	Received unexpected error:
2026-05-23T01:01:36.2219850Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2221224Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-23T01:01:36.2223153Z         	Messages:   	Project creation failed: test-acc-tf-p-3780560506785434092, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:01:36.2224634Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (61.78s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 5 minutes
- 2026-05-26

### Error 2026-05-26T02:10:50+00:00
```
2026-05-26T02:10:50.2693091Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-26T02:10:50.2694353Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-1817348307228520398
2026-05-26T02:10:50.2695333Z     resource_test.go:43: 
2026-05-26T02:10:50.2696805Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:10:50.2699258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:10:50.2701462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:10:50.2703929Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-26T02:10:50.2706654Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-26T02:10:50.2708217Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T02:10:50.2708884Z         	Error:      	Received unexpected error:
2026-05-26T02:10:50.2711461Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.2712674Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-26T02:10:50.2714562Z         	Messages:   	Project creation failed: test-acc-tf-p-1817348307228520398, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:10:50.2715867Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (76.61s)
```

- 2026-05-27 PASS 3 minutes
- 2026-05-28 PASS 4 minutes
- 2026-05-29 PASS 3 minutes
- 2026-05-30

### Error 2026-05-30T01:02:52+00:00
```
2026-05-30T01:02:52.6580941Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-30T01:02:52.6581631Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-2822405925171146062
2026-05-30T01:02:52.6582171Z     resource_test.go:43: 
2026-05-30T01:02:52.6583160Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:52.6585068Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:52.6586953Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:52.6589067Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-30T01:02:52.6591684Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-30T01:02:52.6593041Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:02:52.6593610Z         	Error:      	Received unexpected error:
2026-05-30T01:02:52.6595638Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6596993Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-30T01:02:52.6598981Z         	Messages:   	Project creation failed: test-acc-tf-p-2822405925171146062, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:52.6600307Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (62.56s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 3 minutes
- 2026-06-02

### Error 2026-06-02T01:09:46+00:00
```
2026-06-02T01:09:46.5814269Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-06-02T01:09:46.5815259Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-3569244332564545336
2026-06-02T01:09:46.5816149Z     resource_test.go:43: 
2026-06-02T01:09:46.5817612Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:09:46.5820937Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:09:46.5824452Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:09:46.5826911Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-06-02T01:09:46.5830437Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-06-02T01:09:46.5831828Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:09:46.5832425Z         	Error:      	Received unexpected error:
2026-06-02T01:09:46.5834715Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:46.5836199Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-06-02T01:09:46.5838107Z         	Messages:   	Project creation failed: test-acc-tf-p-3569244332564545336, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:09:46.5839375Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (66.66s)
```

- 2026-06-03 PASS 3 minutes
- 2026-06-04 PASS 3 minutes
- 2026-06-05

### Error 2026-06-05T01:12:27+00:00
```
2026-06-05T01:12:27.1745674Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-06-05T01:12:27.1762078Z   
2026-06-05T01:12:27.1762570Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-06-05T01:12:27.1763044Z         
2026-06-05T01:12:27.1763390Z         Error: error creating resource
2026-06-05T01:12:27.1763727Z         
2026-06-05T01:12:27.1764215Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-06-05T01:12:27.1765112Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-06-05T01:12:27.1765999Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-06-05T01:12:27.1766457Z         
2026-06-05T01:12:27.1767229Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a2220e242e1e504cd7b07b6/encryptionAtRest/AZURE/privateEndpoints
2026-06-05T01:12:27.1768111Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-06-05T01:12:27.1768769Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-06-05T01:12:27.1769237Z         BadRequestDetail: 
2026-06-05T01:12:27.1769697Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (4.56s)
```


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
- 2026-05-17 PASS 4 minutes
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 5 minutes
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
