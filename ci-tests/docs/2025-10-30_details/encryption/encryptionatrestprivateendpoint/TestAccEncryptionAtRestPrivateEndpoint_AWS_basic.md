# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_AWS_basic Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2025-10-01 11:59](#error-2025-10-01t1159340000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68dd1510503d494afa81f39d/cloudProviderAccess/68dd161c77784f3f4724baa3 | dev | flaky_500 | 400.09s
[2025-10-02 03:31](#error-2025-10-02t0331450000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68ddc6a0d2c00355743bfad4/cloudProviderAccess/68ddc7d4a496fb5b13e21639 | dev | timeout | 10837.05s
[2025-10-07 03:35](#error-2025-10-07t0335230000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/68e45e7812e64d6587ba1b7b/cloudProviderAccess/68e4602d507f48738a09c4f9 | dev | timeout | 10837.05s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 6 minutes
  - PASS 5 minutes
  - PASS 27 minutes
  - PASS 5 minutes
  - PASS 27 minutes
  - PASS 5 minutes
  - FAIL 6 minutes

### Error 2025-10-01T11:59:34+00:00
```
2025-10-01T11:59:34.4736464Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-10-01T11:59:34.4738463Z 2025/10/01 11:53:01 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd1510503d494afa81f39d/cloudProviderAccess/68dd161c77784f3f4724baa3 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4248322368425075003). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-4248322368425075003], BadRequestDetail:  
2025-10-01T11:59:34.4740254Z 2025/10/01 11:53:01 retrying
2025-10-01T11:59:34.4752487Z    test_working_directory=/tmp/plugintest3787673117 test_terraform_path=/home/runner/work/_temp/1471d8c4-d06b-4681-8849-1c5fe0c673dd/terraform
2025-10-01T11:59:34.4753419Z     resource_test.go:169: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-01T11:59:34.4753902Z         
2025-10-01T11:59:34.4754223Z         Error: error when destroying resource
2025-10-01T11:59:34.4754520Z         
2025-10-01T11:59:34.4754942Z         error deleting Encryption At Rest: (68dd1510503d494afa81f39d):
2025-10-01T11:59:34.4755683Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd1510503d494afa81f39d/encryptionAtRest
2025-10-01T11:59:34.4756267Z         PATCH: HTTP 400 Bad Request (Error code:
2025-10-01T11:59:34.4756810Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-10-01T11:59:34.4757451Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-10-01T11:59:34.4758002Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-10-01T11:59:34.4758460Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (400.87s)
```

  - PASS 6 minutes
- 2025-10-02

### Error 2025-10-02T03:31:45+00:00
```
2025-10-02T03:31:45.8146927Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-10-02T03:31:45.8151015Z 2025/10/02 00:31:16 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6a0d2c00355743bfad4/cloudProviderAccess/68ddc7d4a496fb5b13e21639 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3158865661502935018). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3158865661502935018], BadRequestDetail:  
2025-10-02T03:31:45.8154274Z 2025/10/02 00:31:16 retrying
2025-10-02T03:31:45.8159695Z   diagnostic_detail=
2025-10-02T03:31:45.8170454Z    diagnostic_severity=ERROR
2025-10-02T03:31:45.8191288Z    test_terraform_path=/home/runner/work/_temp/1f5bc259-397c-4c66-86c5-9c30fd40b8b1/terraform test_working_directory=/tmp/plugintest2906816393
2025-10-02T03:31:45.8192797Z     resource_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-10-02T03:31:45.8193495Z         
2025-10-02T03:31:45.8194255Z         Error: error when waiting for status transition in creation
2025-10-02T03:31:45.8194896Z         
2025-10-02T03:31:45.8195716Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-10-02T03:31:45.8197588Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-10-02T03:31:45.8199022Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-10-02T03:31:45.8199749Z         
2025-10-02T03:31:45.8200602Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-10-02T03:31:45.8201601Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2025-10-02T03:31:45.8202689Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-02T03:31:45.8204105Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-02T03:31:45.8204907Z         cleanup failed:
2025-10-02T03:31:45.8206598Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6a0d2c00355743bfad4/encryptionAtRest/AWS/privateEndpoints/68ddc7edd2c00355743d6c09
2025-10-02T03:31:45.8208253Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-02T03:31:45.8209292Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2025-10-02T03:31:45.8210470Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2025-10-02T03:31:45.8211677Z         [68ddc7edd2c00355743d6c09] during IN_PROGRESS state. Please try again later.
2025-10-02T03:31:45.8212934Z         Reason: Bad Request. Params: [[68ddc7edd2c00355743d6c09]], BadRequestDetail: 
2025-10-02T03:31:45.8234421Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic test_step_number=2
2025-10-02T03:31:45.8235811Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-02T03:31:45.8236649Z         
2025-10-02T03:31:45.8237443Z         Error: error when destroying resource
2025-10-02T03:31:45.8238000Z         
2025-10-02T03:31:45.8238778Z         error deleting Encryption At Rest: (68ddc6a0d2c00355743bfad4):
2025-10-02T03:31:45.8240177Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68ddc6a0d2c00355743bfad4/encryptionAtRest
2025-10-02T03:31:45.8241265Z         PATCH: HTTP 400 Bad Request (Error code:
2025-10-02T03:31:45.8242269Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-10-02T03:31:45.8243622Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-10-02T03:31:45.8244657Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-10-02T03:31:45.8245517Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (10837.52s)
```

- 2025-10-03 PASS 12 minutes
- 2025-10-04 PASS an hour
- 2025-10-05 PASS 5 minutes
- 2025-10-06 PASS 5 minutes
- 2025-10-07

### Error 2025-10-07T03:35:23+00:00
```
2025-10-07T03:35:23.9275052Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-10-07T03:35:23.9277749Z 2025/10/07 00:34:54 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e7812e64d6587ba1b7b/cloudProviderAccess/68e4602d507f48738a09c4f9 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8985792324357360791). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-8985792324357360791], BadRequestDetail:  
2025-10-07T03:35:23.9279787Z 2025/10/07 00:34:54 retrying
2025-10-07T03:35:23.9282792Z   diagnostic_detail=
2025-10-07T03:35:23.9288905Z    diagnostic_severity=ERROR
2025-10-07T03:35:23.9301813Z    test_name=TestAccEncryptionAtRestPrivateEndpoint_AWS_basic
2025-10-07T03:35:23.9302416Z     resource_test.go:169: Step 2/3 error: Error running apply: exit status 1
2025-10-07T03:35:23.9302831Z         
2025-10-07T03:35:23.9303274Z         Error: error when waiting for status transition in creation
2025-10-07T03:35:23.9303656Z         
2025-10-07T03:35:23.9304127Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2025-10-07T03:35:23.9305353Z           on terraform_plugin_test.tf line 94, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2025-10-07T03:35:23.9306194Z           94: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2025-10-07T03:35:23.9306616Z         
2025-10-07T03:35:23.9307101Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2025-10-07T03:35:23.9307666Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2025-10-07T03:35:23.9308297Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2025-10-07T03:35:23.9309108Z         transient error, wait before retrying to allow resource deletion to finish
2025-10-07T03:35:23.9309571Z         cleanup failed:
2025-10-07T03:35:23.9310501Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e7812e64d6587ba1b7b/encryptionAtRest/AWS/privateEndpoints/68e46047507f48738a09c50e
2025-10-07T03:35:23.9311302Z         DELETE: HTTP 400 Bad Request (Error code:
2025-10-07T03:35:23.9311881Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2025-10-07T03:35:23.9312537Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2025-10-07T03:35:23.9313200Z         [68e46047507f48738a09c50e] during IN_PROGRESS state. Please try again later.
2025-10-07T03:35:23.9313882Z         Reason: Bad Request. Params: [[68e46047507f48738a09c50e]], BadRequestDetail: 
2025-10-07T03:35:23.9326665Z   
2025-10-07T03:35:23.9327187Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-07T03:35:23.9327661Z         
2025-10-07T03:35:23.9328010Z         Error: error when destroying resource
2025-10-07T03:35:23.9328335Z         
2025-10-07T03:35:23.9328778Z         error deleting Encryption At Rest: (68e45e7812e64d6587ba1b7b):
2025-10-07T03:35:23.9329532Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/68e45e7812e64d6587ba1b7b/encryptionAtRest
2025-10-07T03:35:23.9330150Z         PATCH: HTTP 400 Bad Request (Error code:
2025-10-07T03:35:23.9330707Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2025-10-07T03:35:23.9331585Z         Encryption at Rest cannot be disabled when private endpoints are present.
2025-10-07T03:35:23.9332194Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2025-10-07T03:35:23.9332684Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_AWS_basic (10837.45s)
```

- 2025-10-08 PASS 6 minutes
- 2025-10-09 PASS 12 minutes
- 2025-10-10 PASS 6 minutes
- 2025-10-11 PASS 4 minutes
- 2025-10-12 PASS an hour
- 2025-10-13 PASS 7 minutes
- 2025-10-14 PASS 6 minutes
- 2025-10-15 PASS 6 minutes
- 2025-10-16 PASS 6 minutes
- 2025-10-17 PASS 6 minutes
- 2025-10-18 PASS 5 minutes
- 2025-10-19 PASS 5 minutes
- 2025-10-20
  - PASS 7 minutes
  - PASS 4 minutes
- 2025-10-21 PASS 5 minutes
- 2025-10-22
  - PASS 8 minutes
  - PASS 5 minutes
- 2025-10-23 PASS 6 minutes
- 2025-10-24 PASS 6 minutes
- 2025-10-25 PASS 7 minutes
- 2025-10-26 PASS 5 minutes
- 2025-10-27 PASS 12 minutes
- 2025-10-28 PASS 6 minutes
- 2025-10-29 PASS 6 minutes
- 2025-10-30 PASS 8 minutes