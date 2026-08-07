# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 31 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:51](#error-2026-07-09t0051400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-07-11 00:45](#error-2026-07-11t0045370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.09s
[2026-07-16 00:50](#error-2026-07-16t0050530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.08s
[2026-07-18 00:44](#error-2026-07-18t0044020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.09s
[2026-07-23 00:57](#error-2026-07-23t0057020000) |  | dev |  | 334.10s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:51:40+00:00
```
2026-07-09T00:51:40.9729001Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-09T00:51:40.9730004Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-4313699852746313996
2026-07-09T00:51:40.9731041Z     resource_test.go:43: 
2026-07-09T00:51:40.9732234Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:51:40.9734815Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:51:40.9737114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:51:40.9739653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-07-09T00:51:40.9742705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-07-09T00:51:40.9744309Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T00:51:40.9745017Z         	Error:      	Received unexpected error:
2026-07-09T00:51:40.9747439Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:40.9748895Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-09T00:51:40.9751379Z         	Messages:   	Project creation failed: test-acc-tf-p-4313699852746313996, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:51:40.9752990Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (69.10s)
```

- 2026-07-10 PASS 3 minutes
- 2026-07-11

### Error 2026-07-11T00:45:37+00:00
```
2026-07-11T00:45:37.6223400Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-11T00:45:37.6224433Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-8541526046531255241
2026-07-11T00:45:37.6225340Z     resource_test.go:43: 
2026-07-11T00:45:37.6226524Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:37.6230429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:37.6233462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:37.6236069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-07-11T00:45:37.6239497Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-07-11T00:45:37.6240922Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:37.6241516Z         	Error:      	Received unexpected error:
2026-07-11T00:45:37.6243530Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:37.6244713Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-11T00:45:37.6246562Z         	Messages:   	Project creation failed: test-acc-tf-p-8541526046531255241, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:37.6248325Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (75.89s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 4 minutes
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16

### Error 2026-07-16T00:50:53+00:00
```
2026-07-16T00:50:53.0779059Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-16T00:50:53.0782012Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-5877261916253141571
2026-07-16T00:50:53.0782798Z     resource_test.go:43: 
2026-07-16T00:50:53.0784123Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:50:53.0786753Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:50:53.0789382Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:50:53.0792849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-07-16T00:50:53.0795955Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-07-16T00:50:53.0797807Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:50:53.0798438Z         	Error:      	Received unexpected error:
2026-07-16T00:50:53.0800622Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:50:53.0802762Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-16T00:50:53.0804856Z         	Messages:   	Project creation failed: test-acc-tf-p-5877261916253141571, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:50:53.0806309Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (64.77s)
```

- 2026-07-17 PASS 3 minutes
- 2026-07-18

### Error 2026-07-18T00:44:02+00:00
```
2026-07-18T00:44:02.7863460Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-18T00:44:02.7864554Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-5458352730889068492
2026-07-18T00:44:02.7865378Z     resource_test.go:43: 
2026-07-18T00:44:02.7866994Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:02.7870249Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:02.7873506Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:02.7877041Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-07-18T00:44:02.7880589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-07-18T00:44:02.7882922Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:44:02.7883816Z         	Error:      	Received unexpected error:
2026-07-18T00:44:02.7887189Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7889281Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-18T00:44:02.7892510Z         	Messages:   	Project creation failed: test-acc-tf-p-5458352730889068492, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7894561Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (62.85s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 5 minutes
- 2026-07-22 PASS 3 minutes
- 2026-07-23

### Error 2026-07-23T00:57:02+00:00
```
2026-07-23T00:57:02.8173458Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-07-23T00:57:02.8174803Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-6018706964696763522
2026-07-23T00:57:02.8191979Z   
2026-07-23T00:57:02.8192988Z     resource_test.go:43: Error running post-test destroy, there may be dangling resources: exit status 1
2026-07-23T00:57:02.8193910Z         
2026-07-23T00:57:02.8194664Z         Error: error when waiting for status transition in delete
2026-07-23T00:57:02.8195328Z         
2026-07-23T00:57:02.8196247Z         unexpected state 'PENDING_ACCEPTANCE', wanted target 'DELETED, FAILED'. last
2026-07-23T00:57:02.8197138Z         error: %!s(<nil>)
2026-07-23T00:57:02.8197869Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (334.99s)
```

- 2026-07-24 PASS 3 minutes
- 2026-07-25 PASS 3 minutes
- 2026-07-26: MISSING
- 2026-07-27 PASS 3 minutes
- 2026-07-28 PASS 3 minutes
- 2026-07-29 PASS 3 minutes
- 2026-07-30 PASS 3 minutes
- 2026-07-31 PASS 3 minutes
- 2026-08-01 PASS 3 minutes
- 2026-08-02: MISSING
- 2026-08-03 PASS 3 minutes
- 2026-08-04 PASS 3 minutes
- 2026-08-05 PASS 3 minutes
- 2026-08-06 PASS 3 minutes
- 2026-08-07 PASS 3 minutes

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 3 minutes
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 3 minutes
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 4 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 4 minutes
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 minutes
  - PASS 3 minutes
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 4 minutes
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
