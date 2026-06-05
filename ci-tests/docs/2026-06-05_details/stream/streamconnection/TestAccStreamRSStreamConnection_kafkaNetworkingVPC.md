# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaNetworkingVPC Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 14)
Success rate: 60.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 10:32](#error-2026-05-07t1032420000) |  | dev | timeout | 1363.08s
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s
[2026-05-11 02:17](#error-2026-05-11t0217120000) |  | dev | timeout | 1372.06s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.07s
[2026-05-18 02:31](#error-2026-05-18t0231450000) |  | dev | timeout | 1433.03s
[2026-05-20 01:51](#error-2026-05-20t0151330000) |  | dev | timeout | 1374.07s
[2026-05-22 03:03](#error-2026-05-22t0303430000) |  | dev | timeout | 1362.10s
[2026-05-27 03:19](#error-2026-05-27t0319540000) |  | dev | timeout | 1374.05s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.03s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 19 minutes
  - FAIL 22 minutes

### Error 2026-05-07T10:32:42+00:00
```
2026-05-07T10:32:42.9667119Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-07T10:32:42.9684107Z    test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_terraform_path=/home/runner/work/_temp/1d8fb31c-b367-43e4-97ad-ec8b52a3f105/terraform
2026-05-07T10:32:42.9685838Z     resource_stream_connection_test.go:232: Step 1/2 error: Error running apply: exit status 1
2026-05-07T10:32:42.9686655Z         
2026-05-07T10:32:42.9687342Z         Error: error waiting for stream connection to be ready
2026-05-07T10:32:42.9688575Z         
2026-05-07T10:32:42.9689223Z           with mongodbatlas_stream_connection.test,
2026-05-07T10:32:42.9690472Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-07T10:32:42.9691652Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-07T10:32:42.9692283Z         
2026-05-07T10:32:42.9693099Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-07T10:32:42.9693933Z         'PENDING', timeout: 20m0s)
2026-05-07T10:32:42.9694687Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1363.79s)
```

- 2026-05-08 PASS 18 minutes
- 2026-05-09
  - PASS 18 minutes
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1076692Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-09T01:47:38.1077426Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-2294502010934011104
2026-05-09T01:47:38.1078038Z     resource_stream_connection_test.go:227: 
2026-05-09T01:47:38.1079207Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1081304Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1083394Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1085209Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1087274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-05-09T01:47:38.1088573Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1089097Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1091076Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1092429Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-09T01:47:38.1094256Z         	Messages:   	Project creation failed: test-acc-tf-p-2294502010934011104, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1095517Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (63.45s)
```

- 2026-05-10: MISSING
- 2026-05-11

### Error 2026-05-11T02:17:12+00:00
```
2026-05-11T02:17:12.4551221Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-11T02:17:12.4561776Z   
2026-05-11T02:17:12.4562307Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-11T02:17:12.4562786Z         
2026-05-11T02:17:12.4563195Z         Error: error waiting for stream connection to be ready
2026-05-11T02:17:12.4563552Z         
2026-05-11T02:17:12.4563928Z           with mongodbatlas_stream_connection.test,
2026-05-11T02:17:12.4564658Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-11T02:17:12.4565351Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-11T02:17:12.4565895Z         
2026-05-11T02:17:12.4566371Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-11T02:17:12.4566858Z         'PENDING', timeout: 20m0s)
2026-05-11T02:17:12.4567290Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1372.57s)
```

- 2026-05-12 PASS 13 minutes
- 2026-05-13 PASS 25 minutes
- 2026-05-14 PASS 21 minutes
- 2026-05-15 PASS 20 minutes
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0863369Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-16T01:46:08.0864090Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-5172769798596229643
2026-05-16T01:46:08.0864840Z     resource_stream_connection_test.go:227: 
2026-05-16T01:46:08.0865808Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0867902Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0869739Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0871576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.0873933Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-05-16T01:46:08.0875233Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:46:08.0875757Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0877736Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0878867Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-16T01:46:08.0880699Z         	Messages:   	Project creation failed: test-acc-tf-p-5172769798596229643, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0881962Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (79.68s)
```

- 2026-05-17: MISSING
- 2026-05-18

### Error 2026-05-18T02:31:45+00:00
```
2026-05-18T02:31:45.6238191Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-18T02:31:45.6248303Z   
2026-05-18T02:31:45.6248919Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-18T02:31:45.6249392Z         
2026-05-18T02:31:45.6249934Z         Error: error waiting for stream connection to be ready
2026-05-18T02:31:45.6250339Z         
2026-05-18T02:31:45.6250706Z           with mongodbatlas_stream_connection.test,
2026-05-18T02:31:45.6251421Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-18T02:31:45.6252095Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-18T02:31:45.6252446Z         
2026-05-18T02:31:45.6252926Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-18T02:31:45.6253395Z         'PENDING', timeout: 20m0s)
2026-05-18T02:31:45.6253827Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1433.28s)
```

- 2026-05-19 PASS 13 minutes
- 2026-05-20
  - FAIL 22 minutes

### Error 2026-05-20T01:51:33+00:00
```
2026-05-20T01:51:33.2335357Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-20T01:51:33.2347639Z   
2026-05-20T01:51:33.2348354Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-20T01:51:33.2348908Z         
2026-05-20T01:51:33.2349384Z         Error: error waiting for stream connection to be ready
2026-05-20T01:51:33.2349812Z         
2026-05-20T01:51:33.2350260Z           with mongodbatlas_stream_connection.test,
2026-05-20T01:51:33.2351256Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-20T01:51:33.2352079Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-20T01:51:33.2352636Z         
2026-05-20T01:51:33.2353217Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-20T01:51:33.2353782Z         'PENDING', timeout: 20m0s)
2026-05-20T01:51:33.2354287Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1374.73s)
```

  - PASS 11 minutes
- 2026-05-21 PASS 17 minutes
- 2026-05-22

### Error 2026-05-22T03:03:43+00:00
```
2026-05-22T03:03:43.9783674Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-22T03:03:43.9791666Z   
2026-05-22T03:03:43.9792304Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-22T03:03:43.9792872Z         
2026-05-22T03:03:43.9793373Z         Error: error waiting for stream connection to be ready
2026-05-22T03:03:43.9793806Z         
2026-05-22T03:03:43.9794278Z           with mongodbatlas_stream_connection.test,
2026-05-22T03:03:43.9795544Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-22T03:03:43.9796133Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-22T03:03:43.9796415Z         
2026-05-22T03:03:43.9796790Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-22T03:03:43.9797157Z         'PENDING', timeout: 20m0s)
2026-05-22T03:03:43.9797489Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1362.96s)
```

- 2026-05-23 PASS 14 minutes
- 2026-05-24: MISSING
- 2026-05-25 PASS 24 minutes
- 2026-05-26 PASS 13 minutes
- 2026-05-27

### Error 2026-05-27T03:19:54+00:00
```
2026-05-27T03:19:54.7993307Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-27T03:19:54.8017934Z   
2026-05-27T03:19:54.8018905Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-27T03:19:54.8019750Z         
2026-05-27T03:19:54.8020861Z         Error: error waiting for stream connection to be ready
2026-05-27T03:19:54.8021542Z         
2026-05-27T03:19:54.8022235Z           with mongodbatlas_stream_connection.test,
2026-05-27T03:19:54.8023556Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-27T03:19:54.8024808Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-27T03:19:54.8025427Z         
2026-05-27T03:19:54.8026309Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-27T03:19:54.8027147Z         'PENDING', timeout: 20m0s)
2026-05-27T03:19:54.8027923Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1374.54s)
```

- 2026-05-28 PASS 17 minutes
- 2026-05-29 PASS 24 minutes
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6578843Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-30T02:30:49.6579606Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-8117732127961556708
2026-05-30T02:30:49.6580235Z     resource_stream_connection_test.go:227: 
2026-05-30T02:30:49.6581433Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6583274Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6585088Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6587158Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T02:30:49.6589241Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-05-30T02:30:49.6590548Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T02:30:49.6591287Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6593293Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6594412Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-30T02:30:49.6596362Z         	Messages:   	Project creation failed: test-acc-tf-p-8117732127961556708, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6597615Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (88.25s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 38 minutes
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5527348Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-06-02T01:54:34.5528068Z     resource_stream_connection_test.go:227: Creating execution project (1): test-acc-tf-p-4999939758048244634
2026-06-02T01:54:34.5528844Z     resource_stream_connection_test.go:227: 
2026-06-02T01:54:34.5529752Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5531397Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5533055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5534706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5536850Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:227
2026-06-02T01:54:34.5538092Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5538616Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5540908Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5542035Z         	Test:       	TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-06-02T01:54:34.5543934Z         	Messages:   	Project creation failed: test-acc-tf-p-4999939758048244634, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5545358Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (61.94s)
```

- 2026-06-03 PASS 33 minutes
- 2026-06-04 PASS 21 minutes
- 2026-06-05 PASS 29 minutes

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-10 02:24](#error-2026-05-10t0224520000) |  | qa | timeout | 1362.02s
[2026-05-17 02:07](#error-2026-05-17t0207570000) |  | qa | timeout | 1362.09s
[2026-05-24 02:09](#error-2026-05-24t0209560000) |  | qa | timeout | 1372.06s
[2026-05-25 22:06](#error-2026-05-25t2206490000) |  | qa | timeout | 1364.07s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10

### Error 2026-05-10T02:24:52+00:00
```
2026-05-10T02:24:52.0879357Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-10T02:24:52.0897055Z   
2026-05-10T02:24:52.0897985Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-10T02:24:52.0898817Z         
2026-05-10T02:24:52.0899534Z         Error: error waiting for stream connection to be ready
2026-05-10T02:24:52.0900352Z         
2026-05-10T02:24:52.0901235Z           with mongodbatlas_stream_connection.test,
2026-05-10T02:24:52.0902530Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-10T02:24:52.0903733Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-10T02:24:52.0904349Z         
2026-05-10T02:24:52.0905183Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-10T02:24:52.0906029Z         'PENDING', timeout: 20m0s)
2026-05-10T02:24:52.0906767Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1362.17s)
```

- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17

### Error 2026-05-17T02:07:57+00:00
```
2026-05-17T02:07:57.7751458Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-17T02:07:57.7760904Z    test_step_number=1 test_terraform_path=/home/runner/work/_temp/9c305d70-0c3c-429f-9149-9b83ef769c93/terraform test_name=TestAccStreamRSStreamConnection_kafkaNetworkingVPC test_working_directory=/tmp/plugintest4061974234
2026-05-17T02:07:57.7762422Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-17T02:07:57.7763193Z         
2026-05-17T02:07:57.7763861Z         Error: error waiting for stream connection to be ready
2026-05-17T02:07:57.7764737Z         
2026-05-17T02:07:57.7765357Z           with mongodbatlas_stream_connection.test,
2026-05-17T02:07:57.7766211Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-17T02:07:57.7766903Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-17T02:07:57.7767266Z         
2026-05-17T02:07:57.7767747Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-17T02:07:57.7768237Z         'PENDING', timeout: 20m0s)
2026-05-17T02:07:57.7768686Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1362.94s)
```

- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24

### Error 2026-05-24T02:09:56+00:00
```
2026-05-24T02:09:56.3871780Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-24T02:09:56.3882490Z   
2026-05-24T02:09:56.3883063Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-24T02:09:56.3883566Z         
2026-05-24T02:09:56.3884003Z         Error: error waiting for stream connection to be ready
2026-05-24T02:09:56.3884384Z         
2026-05-24T02:09:56.3884776Z           with mongodbatlas_stream_connection.test,
2026-05-24T02:09:56.3886031Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-24T02:09:56.3886761Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-24T02:09:56.3887145Z         
2026-05-24T02:09:56.3887644Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-24T02:09:56.3888345Z         'PENDING', timeout: 20m0s)
2026-05-24T02:09:56.3888802Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1372.58s)
```

- 2026-05-25

### Error 2026-05-25T22:06:49+00:00
```
2026-05-25T22:06:49.6051902Z === RUN   TestAccStreamRSStreamConnection_kafkaNetworkingVPC
2026-05-25T22:06:49.6071593Z   
2026-05-25T22:06:49.6072842Z     resource_stream_connection_test.go:237: Step 1/2 error: Error running apply: exit status 1
2026-05-25T22:06:49.6073763Z         
2026-05-25T22:06:49.6074528Z         Error: error waiting for stream connection to be ready
2026-05-25T22:06:49.6075196Z         
2026-05-25T22:06:49.6075919Z           with mongodbatlas_stream_connection.test,
2026-05-25T22:06:49.6077338Z           on terraform_plugin_test.tf line 29, in resource "mongodbatlas_stream_connection" "test":
2026-05-25T22:06:49.6078657Z           29: 		resource "mongodbatlas_stream_connection" "test" {
2026-05-25T22:06:49.6079540Z         
2026-05-25T22:06:49.6080476Z         timeout while waiting for state to become 'READY, FAILED' (last state:
2026-05-25T22:06:49.6081665Z         'PENDING', timeout: 20m0s)
2026-05-25T22:06:49.6082494Z --- FAIL: TestAccStreamRSStreamConnection_kafkaNetworkingVPC (1364.68s)
```

- 2026-05-26 PASS 23 minutes
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 23 minutes
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
