# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-07 03:46](#error-2026-04-07t0346530000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69d4538cc0b364eb740e4942/cloudProviderAccess/69d453da425cee31650c57b6 | dev | timeout | 10842.03s
[2026-04-08 03:47](#error-2026-04-08t0347180000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69d5a50e4a37287164df7669/cloudProviderAccess/69d5a57674e39a66414b1692 | dev | timeout | 10839.02s
[2026-04-09 03:40](#error-2026-04-09t0340320000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69d6f5459bb208aac606e242/cloudProviderAccess/69d6f55fbcd76cc4105f8b6a | dev | timeout | 10859.03s
[2026-04-11 00:45](#error-2026-04-11t0045370000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.03s
[2026-04-16 00:53](#error-2026-04-16t0053210000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69e0329f81002038a8a07cea/cloudProviderAccess/69e032e11ec945fedc72c6c7 | dev | flaky_500 | 97.03s
[2026-04-18 00:47](#error-2026-04-18t0047030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.03s
[2026-05-05 00:54](#error-2026-05-05t0054030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07

### Error 2026-04-07T03:46:53+00:00
```
2026-04-07T03:46:53.8182642Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-07T03:46:53.8184855Z 2026/04/07 00:46:19 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4538cc0b364eb740e4942/cloudProviderAccess/69d453da425cee31650c57b6 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8448840488443118199). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8448840488443118199], BadRequestDetail:  
2026-04-07T03:46:53.8186712Z 2026/04/07 00:46:19 retrying
2026-04-07T03:46:53.8188080Z   diagnostic_detail=
2026-04-07T03:46:53.8195468Z    tf_proto_version=6.11 tf_rpc=ApplyResourceChange tf_req_id=e82bde0d-12e2-5b92-566f-ec8517131bec tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_resource_type=mongodbatlas_encryption_at_rest_private_endpoint diagnostic_severity=ERROR
2026-04-07T03:46:53.8208985Z   
2026-04-07T03:46:53.8209426Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2026-04-07T03:46:53.8209842Z         
2026-04-07T03:46:53.8210484Z         Error: error when waiting for status transition in creation
2026-04-07T03:46:53.8210893Z         
2026-04-07T03:46:53.8211358Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-07T03:46:53.8212357Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-07T03:46:53.8213200Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-07T03:46:53.8213661Z         
2026-04-07T03:46:53.8214134Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2026-04-07T03:46:53.8214706Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2026-04-07T03:46:53.8215321Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-04-07T03:46:53.8216025Z         transient error, wait before retrying to allow resource deletion to finish
2026-04-07T03:46:53.8216492Z         cleanup failed:
2026-04-07T03:46:53.8217393Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4538cc0b364eb740e4942/encryptionAtRest/AWS/privateEndpoints/69d453f7425cee31650c9130
2026-04-07T03:46:53.8218190Z         DELETE: HTTP 400 Bad Request (Error code:
2026-04-07T03:46:53.8218775Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2026-04-07T03:46:53.8219440Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2026-04-07T03:46:53.8220122Z         [69d453f7425cee31650c9130] during IN_PROGRESS state. Please try again later.
2026-04-07T03:46:53.8221054Z         Reason: Bad Request. Params: [[69d453f7425cee31650c9130]], BadRequestDetail: 
2026-04-07T03:46:53.8235407Z   
2026-04-07T03:46:53.8235940Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-07T03:46:53.8236436Z         
2026-04-07T03:46:53.8236769Z         Error: error when destroying resource
2026-04-07T03:46:53.8237079Z         
2026-04-07T03:46:53.8237529Z         error deleting Encryption At Rest: (69d4538cc0b364eb740e4942):
2026-04-07T03:46:53.8238294Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d4538cc0b364eb740e4942/encryptionAtRest
2026-04-07T03:46:53.8238908Z         PATCH: HTTP 400 Bad Request (Error code:
2026-04-07T03:46:53.8239896Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-04-07T03:46:53.8240924Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-04-07T03:46:53.8241530Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-07T03:46:53.8242021Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (10842.31s)
```

- 2026-04-08

### Error 2026-04-08T03:47:18+00:00
```
2026-04-08T03:47:18.6144746Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-08T03:47:18.6146867Z 2026/04/08 00:46:47 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50e4a37287164df7669/cloudProviderAccess/69d5a57674e39a66414b1692 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4862144493208276928). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4862144493208276928], BadRequestDetail:  
2026-04-08T03:47:18.6148766Z 2026/04/08 00:46:47 retrying
2026-04-08T03:47:18.6151929Z   diagnostic_detail=
2026-04-08T03:47:18.6158354Z    diagnostic_severity=ERROR
2026-04-08T03:47:18.6171260Z   
2026-04-08T03:47:18.6171686Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2026-04-08T03:47:18.6172105Z         
2026-04-08T03:47:18.6172540Z         Error: error when waiting for status transition in creation
2026-04-08T03:47:18.6172933Z         
2026-04-08T03:47:18.6173616Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-08T03:47:18.6174516Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-08T03:47:18.6175369Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-08T03:47:18.6175803Z         
2026-04-08T03:47:18.6176289Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2026-04-08T03:47:18.6176873Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2026-04-08T03:47:18.6177626Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-04-08T03:47:18.6178351Z         transient error, wait before retrying to allow resource deletion to finish
2026-04-08T03:47:18.6178841Z         cleanup failed:
2026-04-08T03:47:18.6179754Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50e4a37287164df7669/encryptionAtRest/AWS/privateEndpoints/69d5a59274e39a66414b5531
2026-04-08T03:47:18.6180562Z         DELETE: HTTP 400 Bad Request (Error code:
2026-04-08T03:47:18.6181160Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2026-04-08T03:47:18.6181838Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2026-04-08T03:47:18.6182531Z         [69d5a59274e39a66414b5531] during IN_PROGRESS state. Please try again later.
2026-04-08T03:47:18.6183249Z         Reason: Bad Request. Params: [[69d5a59274e39a66414b5531]], BadRequestDetail: 
2026-04-08T03:47:18.6197004Z   
2026-04-08T03:47:18.6197536Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-08T03:47:18.6198040Z         
2026-04-08T03:47:18.6198372Z         Error: error when destroying resource
2026-04-08T03:47:18.6198698Z         
2026-04-08T03:47:18.6199145Z         error deleting Encryption At Rest: (69d5a50e4a37287164df7669):
2026-04-08T03:47:18.6199915Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d5a50e4a37287164df7669/encryptionAtRest
2026-04-08T03:47:18.6200548Z         PATCH: HTTP 400 Bad Request (Error code:
2026-04-08T03:47:18.6201120Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-04-08T03:47:18.6201810Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-04-08T03:47:18.6202410Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-08T03:47:18.6202910Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (10839.19s)
```

- 2026-04-09

### Error 2026-04-09T03:40:32+00:00
```
2026-04-09T03:40:32.2611186Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-09T03:40:32.2611822Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-5149482320588177442
2026-04-09T03:40:32.2613910Z 2026/04/09 00:40:00 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f5459bb208aac606e242/cloudProviderAccess/69d6f55fbcd76cc4105f8b6a PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5229215871927126658). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5229215871927126658], BadRequestDetail:  
2026-04-09T03:40:32.2615635Z 2026/04/09 00:40:00 retrying
2026-04-09T03:40:32.2618199Z   diagnostic_detail=
2026-04-09T03:40:32.2627768Z    diagnostic_severity=ERROR diagnostic_summary="error when waiting for status transition in creation" tf_resource_type=mongodbatlas_encryption_at_rest_private_endpoint
2026-04-09T03:40:32.2640681Z    test_terraform_path=/home/runner/work/_temp/e79763d3-0244-490f-80d8-7fd3801a1e39/terraform test_step_number=2 test_working_directory=/tmp/plugintest2322346206 test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-09T03:40:32.2641768Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2026-04-09T03:40:32.2642169Z         
2026-04-09T03:40:32.2642602Z         Error: error when waiting for status transition in creation
2026-04-09T03:40:32.2642981Z         
2026-04-09T03:40:32.2643438Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-09T03:40:32.2644294Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-09T03:40:32.2645108Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-09T03:40:32.2645515Z         
2026-04-09T03:40:32.2645986Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2026-04-09T03:40:32.2646547Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2026-04-09T03:40:32.2647166Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-04-09T03:40:32.2647853Z         transient error, wait before retrying to allow resource deletion to finish
2026-04-09T03:40:32.2648309Z         cleanup failed:
2026-04-09T03:40:32.2649422Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f5459bb208aac606e242/encryptionAtRest/AWS/privateEndpoints/69d6f57b9bb208aac607162f
2026-04-09T03:40:32.2650347Z         DELETE: HTTP 400 Bad Request (Error code:
2026-04-09T03:40:32.2650922Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2026-04-09T03:40:32.2651564Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2026-04-09T03:40:32.2652224Z         [69d6f57b9bb208aac607162f] during IN_PROGRESS state. Please try again later.
2026-04-09T03:40:32.2652923Z         Reason: Bad Request. Params: [[69d6f57b9bb208aac607162f]], BadRequestDetail: 
2026-04-09T03:40:32.2665549Z   
2026-04-09T03:40:32.2666071Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-04-09T03:40:32.2666548Z         
2026-04-09T03:40:32.2666881Z         Error: error when destroying resource
2026-04-09T03:40:32.2667190Z         
2026-04-09T03:40:32.2667621Z         error deleting Encryption At Rest: (69d6f5459bb208aac606e242):
2026-04-09T03:40:32.2668354Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69d6f5459bb208aac606e242/encryptionAtRest
2026-04-09T03:40:32.2668953Z         PATCH: HTTP 400 Bad Request (Error code:
2026-04-09T03:40:32.2669686Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-04-09T03:40:32.2670343Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-04-09T03:40:32.2670918Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-04-09T03:40:32.2671402Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (10859.28s)
```

- 2026-04-10 PASS 6 minutes
- 2026-04-11

### Error 2026-04-11T00:45:37+00:00
```
2026-04-11T00:45:37.0693582Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-11T00:45:37.0694221Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-57512483113031916
2026-04-11T00:45:37.0694739Z     resource_test.go:174: 
2026-04-11T00:45:37.0695673Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:45:37.0697498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:45:37.0699321Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:45:37.0701393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-04-11T00:45:37.0703787Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-04-11T00:45:37.0705084Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T00:45:37.0705761Z         	Error:      	Received unexpected error:
2026-04-11T00:45:37.0707730Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:37.0709899Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-11T00:45:37.0713664Z         	Messages:   	Project creation failed: test-acc-tf-p-57512483113031916, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:45:37.0715956Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (75.27s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 5 minutes
- 2026-04-14 PASS 5 minutes
- 2026-04-15 PASS 5 minutes
- 2026-04-16

### Error 2026-04-16T00:53:21+00:00
```
2026-04-16T00:53:21.3537273Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-16T00:53:21.3537926Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-2235255343518674897
2026-04-16T00:53:21.3540384Z 2026/04/16 00:52:50 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0329f81002038a8a07cea/cloudProviderAccess/69e032e11ec945fedc72c6c7 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8746065797535701528). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8746065797535701528], BadRequestDetail:  
2026-04-16T00:53:21.3542302Z 2026/04/16 00:52:50 retrying
2026-04-16T00:53:21.3555417Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_terraform_path=/home/runner/work/_temp/07c39cdf-5c5f-42c1-a019-428eba7c0495/terraform test_working_directory=/tmp/plugintest2266503748 test_step_number=2
2026-04-16T00:53:21.3556590Z     resource_test.go:174: Step 2/3 error: Error running apply: exit status 1
2026-04-16T00:53:21.3557014Z         
2026-04-16T00:53:21.3557471Z         Error: error creating resource
2026-04-16T00:53:21.3557789Z         
2026-04-16T00:53:21.3558263Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-04-16T00:53:21.3559166Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-04-16T00:53:21.3560255Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-04-16T00:53:21.3560706Z         
2026-04-16T00:53:21.3561454Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e0329f81002038a8a07cea/encryptionAtRest/AWS/privateEndpoints
2026-04-16T00:53:21.3562338Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-04-16T00:53:21.3562993Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-04-16T00:53:21.3563438Z         BadRequestDetail: 
2026-04-16T00:53:21.3563845Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (97.25s)
```

- 2026-04-17 PASS 5 minutes
- 2026-04-18

### Error 2026-04-18T00:47:03+00:00
```
2026-04-18T00:47:03.4545220Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-18T00:47:03.4546335Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-2761430884251828282
2026-04-18T00:47:03.4547217Z     resource_test.go:174: 
2026-04-18T00:47:03.4548876Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:47:03.4552211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:47:03.4555751Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:47:03.4559556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-04-18T00:47:03.4563746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-04-18T00:47:03.4566107Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-18T00:47:03.4567240Z         	Error:      	Received unexpected error:
2026-04-18T00:47:03.4570853Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:03.4573139Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-04-18T00:47:03.4576458Z         	Messages:   	Project creation failed: test-acc-tf-p-2761430884251828282, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:47:03.4578705Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (69.31s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 5 minutes
- 2026-04-21 PASS 5 minutes
- 2026-04-22 PASS 8 minutes
- 2026-04-23 PASS 5 minutes
- 2026-04-24 PASS 7 minutes
- 2026-04-25 PASS 5 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 minutes
- 2026-04-28 PASS 6 minutes
- 2026-04-29 PASS 5 minutes
- 2026-04-30 PASS 7 minutes
- 2026-05-01 PASS 6 minutes
- 2026-05-02 PASS 5 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 minutes
- 2026-05-05

### Error 2026-05-05T00:54:03+00:00
```
2026-05-05T00:54:03.5309983Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-05T00:54:03.5310610Z     resource_test.go:174: Creating execution project (1): test-acc-tf-p-407315828544836148
2026-05-05T00:54:03.5311113Z     resource_test.go:174: 
2026-05-05T00:54:03.5312048Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:54:03.5314191Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:54:03.5316213Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:54:03.5318325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:180
2026-05-05T00:54:03.5320539Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrestprivateendpoint/resource_test.go:174
2026-05-05T00:54:03.5321887Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-05T00:54:03.5322431Z         	Error:      	Received unexpected error:
2026-05-05T00:54:03.5324709Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:03.5325869Z         	Test:       	TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2026-05-05T00:54:03.5327723Z         	Messages:   	Project creation failed: test-acc-tf-p-407315828544836148, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:54:03.5328998Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (77.94s)
```

- 2026-05-06 PASS 6 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 6 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 5 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 5 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 7 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 5 minutes
- 2026-05-04 PASS 5 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 minutes
