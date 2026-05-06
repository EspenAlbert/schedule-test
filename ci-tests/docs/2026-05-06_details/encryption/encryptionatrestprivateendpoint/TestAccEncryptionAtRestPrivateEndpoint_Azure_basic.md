# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 25) FAIL(x 9)
Success rate: 73.53%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 03:46](#error-2026-04-07t0346530000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d4538cc0b364eb740e4942/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 70.02s
[2026-04-08 03:47](#error-2026-04-08t0347180000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69d5a50e4a37287164df7669/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 4.03s
[2026-04-09 03:40](#error-2026-04-09t0340320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.05s
[2026-04-11 00:45](#error-2026-04-11t0045370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-04-14 00:55](#error-2026-04-14t0055410000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-04-16 00:53](#error-2026-04-16t0053210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.04s
[2026-04-18 00:47](#error-2026-04-18t0047030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.05s
[2026-04-30 01:03](#error-2026-04-30t0103280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-05 00:54](#error-2026-05-05t0054030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.04s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T03:46:53+00:00
```
2026-04-07T03:46:53.8146605Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-07T03:46:53.8147811Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-1224964817721604913
2026-04-07T03:46:53.8169632Z    test_terraform_path=/home/runner/work/_temp/b421dae2-5dcb-4d3b-90bc-35b347aaea49/terraform test_working_directory=/tmp/plugintest4043843028 test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-07T03:46:53.8171111Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-04-07T03:46:53.8171537Z         
2026-04-07T03:46:53.8171844Z         Error: error creating resource
2026-04-07T03:46:53.8172156Z         
2026-04-07T03:46:53.8172619Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-07T03:46:53.8173745Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-07T03:46:53.8174586Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-07T03:46:53.8175014Z         
2026-04-07T03:46:53.8175756Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4538cc0b364eb740e4942/encryptionAtRest/AZURE/privateEndpoints
2026-04-07T03:46:53.8176982Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-07T03:46:53.8177624Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-07T03:46:53.8178065Z         BadRequestDetail: 
2026-04-07T03:46:53.8178478Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (70.24s)
```

- 2026-04-08

### Error 2026-04-08T03:47:18+00:00
```
2026-04-08T03:47:18.6116565Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-08T03:47:18.6132513Z    test_working_directory=/tmp/plugintest3582699301
2026-04-08T03:47:18.6133081Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-04-08T03:47:18.6133745Z         
2026-04-08T03:47:18.6134067Z         Error: error creating resource
2026-04-08T03:47:18.6134379Z         
2026-04-08T03:47:18.6134843Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-08T03:47:18.6135737Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-08T03:47:18.6136591Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-08T03:47:18.6137034Z         
2026-04-08T03:47:18.6137785Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50e4a37287164df7669/encryptionAtRest/AZURE/privateEndpoints
2026-04-08T03:47:18.6138679Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-08T03:47:18.6139332Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-08T03:47:18.6139776Z         BadRequestDetail: 
2026-04-08T03:47:18.6140220Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (4.34s)
```

- 2026-04-09

### Error 2026-04-09T03:40:32+00:00
```
2026-04-09T03:40:32.2581497Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-09T03:40:32.2582712Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-677561495649089050
2026-04-09T03:40:32.2585254Z     resource_test.go:43: 
2026-04-09T03:40:32.2586604Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-09T03:40:32.2589436Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-09T03:40:32.2592406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-09T03:40:32.2595257Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-09T03:40:32.2598351Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-09T03:40:32.2600225Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-09T03:40:32.2600788Z         	Error:      	Received unexpected error:
2026-04-09T03:40:32.2602672Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T03:40:32.2603828Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-09T03:40:32.2605793Z         	Messages:   	Project creation failed: test-acc-tf-p-677561495649089050, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T03:40:32.2606994Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (79.47s)
```

- 2026-04-10 PASS 3 minutes
- 2026-04-11

### Error 2026-04-11T00:45:37+00:00
```
2026-04-11T00:45:37.0666732Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-11T00:45:37.0667373Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-9208916061358109235
2026-04-11T00:45:37.0668086Z     resource_test.go:43: 
2026-04-11T00:45:37.0669896Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:37.0673174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:37.0676401Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:37.0678707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-11T00:45:37.0680914Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-11T00:45:37.0682208Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:45:37.0682980Z         	Error:      	Received unexpected error:
2026-04-11T00:45:37.0684970Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:37.0686106Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-11T00:45:37.0688152Z         	Messages:   	Project creation failed: test-acc-tf-p-9208916061358109235, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:37.0689431Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (62.38s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 3 minutes
- 2026-04-14

### Error 2026-04-14T00:55:41+00:00
```
2026-04-14T00:55:41.5626854Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-14T00:55:41.5628713Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-381620795775943976
2026-04-14T00:55:41.5629767Z     resource_test.go:43: 
2026-04-14T00:55:41.5631616Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-14T00:55:41.5635462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-14T00:55:41.5639505Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-14T00:55:41.5643760Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-14T00:55:41.5648420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-14T00:55:41.5651016Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-14T00:55:41.5652042Z         	Error:      	Received unexpected error:
2026-04-14T00:55:41.5655990Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:55:41.5658643Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-14T00:55:41.5662341Z         	Messages:   	Project creation failed: test-acc-tf-p-381620795775943976, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:55:41.5664915Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (61.72s)
```

- 2026-04-15 PASS 3 minutes
- 2026-04-16

### Error 2026-04-16T00:53:21+00:00
```
2026-04-16T00:53:21.3507020Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-16T00:53:21.3508551Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-7263084453848476775
2026-04-16T00:53:21.3509779Z     resource_test.go:43: 
2026-04-16T00:53:21.3511643Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-16T00:53:21.3515321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-16T00:53:21.3519093Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-16T00:53:21.3521983Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-16T00:53:21.3524372Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-16T00:53:21.3525728Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-16T00:53:21.3526294Z         	Error:      	Received unexpected error:
2026-04-16T00:53:21.3528344Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:21.3529971Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-16T00:53:21.3531934Z         	Messages:   	Project creation failed: test-acc-tf-p-7263084453848476775, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:53:21.3533257Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (62.37s)
```

- 2026-04-17 PASS 3 minutes
- 2026-04-18

### Error 2026-04-18T00:47:03+00:00
```
2026-04-18T00:47:03.4503647Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-18T00:47:03.4504764Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-8408960030866861720
2026-04-18T00:47:03.4505734Z     resource_test.go:43: 
2026-04-18T00:47:03.4507477Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:47:03.4510788Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:47:03.4514507Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:47:03.4518308Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-18T00:47:03.4522321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-18T00:47:03.4525687Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-18T00:47:03.4526639Z         	Error:      	Received unexpected error:
2026-04-18T00:47:03.4530238Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:03.4532478Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-18T00:47:03.4536032Z         	Messages:   	Project creation failed: test-acc-tf-p-8408960030866861720, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:03.4538286Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (68.49s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 3 minutes
- 2026-04-21 PASS 4 minutes
- 2026-04-22 PASS 32 minutes
- 2026-04-23 PASS 4 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 4 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 3 minutes
- 2026-04-28 PASS 4 minutes
- 2026-04-29 PASS 3 minutes
- 2026-04-30

### Error 2026-04-30T01:03:28+00:00
```
2026-04-30T01:03:28.3914097Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-30T01:03:28.3915031Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-2183065248999262448
2026-04-30T01:03:28.3915681Z     resource_test.go:43: 
2026-04-30T01:03:28.3917127Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:03:28.3919432Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:03:28.3921726Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:03:28.3924371Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-04-30T01:03:28.3927744Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-04-30T01:03:28.3929339Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:03:28.3929994Z         	Error:      	Received unexpected error:
2026-04-30T01:03:28.3932458Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:03:28.3933875Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-04-30T01:03:28.3936267Z         	Messages:   	Project creation failed: test-acc-tf-p-2183065248999262448, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:03:28.3938088Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (64.49s)
```

- 2026-05-01 PASS 3 minutes
- 2026-05-02 PASS 3 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 minutes
- 2026-05-05

### Error 2026-05-05T00:54:03+00:00
```
2026-05-05T00:54:03.5284846Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-05T00:54:03.5286112Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-2162292665139258327
2026-05-05T00:54:03.5287041Z     resource_test.go:43: 
2026-05-05T00:54:03.5288473Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:54:03.5290346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:54:03.5292212Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:54:03.5294587Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:87
2026-05-05T00:54:03.5296812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:43
2026-05-05T00:54:03.5298118Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T00:54:03.5298677Z         	Error:      	Received unexpected error:
2026-05-05T00:54:03.5300691Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:03.5302222Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-05-05T00:54:03.5304743Z         	Messages:   	Project creation failed: test-acc-tf-p-2162292665139258327, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:03.5306076Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (72.44s)
```

- 2026-05-06 PASS 5 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 5 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 3 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 minutes
- 2026-05-04 PASS 3 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 5 minutes
