# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 38 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 33) FAIL(x 5)
Success rate: 86.84%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-11 01:01](#error-2025-08-11t0101440000) |  | dev | 1749.01s
[2025-08-16 00:57](#error-2025-08-16t0057120000) |  | dev | 1748.06s
[2025-08-29 00:40](#error-2025-08-29t0040250000) | CheckFailure for serverless_instances.test at Step: 2 Checks: 9,10,11 | dev | 779.09s
[2025-09-01 00:50](#error-2025-09-01t0050460000) |  | dev | 1200.06s
[2025-09-01 06:27](#error-2025-09-01t0627580000) |  | dev | 1758.03s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 12 minutes
- 2025-08-07 PASS 17 minutes
- 2025-08-08 PASS 11 minutes
- 2025-08-09 PASS 12 minutes
- 2025-08-10 PASS 17 minutes
- 2025-08-11

### Error 2025-08-11T01:01:44+00:00
```
2025-08-11T01:01:44.0399482Z === RUN   TestAccServerlessInstance_withTags
2025-08-11T01:01:44.0401393Z === CONT  TestAccServerlessInstance_withTags
2025-08-11T01:01:44.0411598Z === NAME  TestAccServerlessInstance_withTags
2025-08-11T01:01:44.0412321Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-11T01:01:44.0412828Z         
2025-08-11T01:01:44.0413466Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-7072341455347440813): context deadline exceeded
2025-08-11T01:01:44.0413961Z         
2025-08-11T01:01:44.0414390Z --- FAIL: TestAccServerlessInstance_withTags (1749.07s)
```

- 2025-08-12 PASS 10 minutes
- 2025-08-13 PASS 12 minutes
- 2025-08-14 PASS 12 minutes
- 2025-08-15 PASS 10 minutes
- 2025-08-16

### Error 2025-08-16T00:57:12+00:00
```
2025-08-16T00:57:12.7431104Z === RUN   TestAccServerlessInstance_withTags
2025-08-16T00:57:12.7432916Z === CONT  TestAccServerlessInstance_withTags
2025-08-16T00:57:12.7442792Z === NAME  TestAccServerlessInstance_withTags
2025-08-16T00:57:12.7443492Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-08-16T00:57:12.7444009Z         
2025-08-16T00:57:12.7444745Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-1410881602465434574): context deadline exceeded
2025-08-16T00:57:12.7445240Z         
2025-08-16T00:57:12.7445680Z --- FAIL: TestAccServerlessInstance_withTags (1748.58s)
```

- 2025-08-17 PASS 16 minutes
- 2025-08-18 PASS 10 minutes
- 2025-08-19 PASS 11 minutes
- 2025-08-20
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-08-21 PASS 12 minutes
- 2025-08-22 PASS 10 minutes
- 2025-08-23 PASS 11 minutes
- 2025-08-24 PASS 10 minutes
- 2025-08-25 PASS 10 minutes
- 2025-08-26 PASS 15 minutes
- 2025-08-27 PASS 17 minutes
- 2025-08-28 PASS 11 minutes
- 2025-08-29

### Error 2025-08-29T00:40:25+00:00
```
2025-08-29T00:40:25.5303805Z === RUN   TestAccServerlessInstance_withTags
2025-08-29T00:40:25.5305410Z === CONT  TestAccServerlessInstance_withTags
2025-08-29T00:40:25.5395362Z === NAME  TestAccServerlessInstance_withTags
2025-08-29T00:40:25.5396289Z     resource_serverless_instance_test.go:30: Step 2/3 error: Check failed: Check 9/11 error: data.mongodbatlas_serverless_instances.test: Attribute 'results.0.tags.#' expected "2", got "0"
2025-08-29T00:40:25.5427873Z         Check 10/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 1", "value":"value 1"} in state: map[string]string{"%":"3", "id":"terraform-20250829003331390800000011", "project_id":"68b0f3ea3786781796f00e61", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"false", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-767971871.uw3zsmq.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-08-29T00:27:25Z", "results.0.id":"68b0f3ed3786781796f01682", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.12", "results.0.name":"test-acc-tf-c-7679718715049925699", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-573787722.suq7nij.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-08-29T00:27:26Z", "results.1.id":"68b0f3ee3786781796f01694", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.12", "results.1.name":"test-acc-tf-c-5737877227601476910", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"DELETING", "results.1.tags.#":"0", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-670954923.ctzvhgz.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-08-29T00:27:25Z", "results.2.id":"68b0f3ed3786781796f01680", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.12", "results.2.name":"test-acc-tf-c-6709549239102812485", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"IDLE", "results.2.tags.#":"2", "results.2.tags.0.%":"2", "results.2.tags.0.key":"key 1", "results.2.tags.0.value":"value 1", "results.2.tags.1.%":"2", "results.2.tags.1.key":"key 2", "results.2.tags.1.value":"value 2", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"true", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-380055179.mru2ihm.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-08-29T00:27:25Z", "results.3.id":"68b0f3edc342212f74ff2315", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.12", "results.3.name":"test-acc-tf-c-3800551792836455231", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-08-29T00:40:25.5478179Z         Check 11/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 2", "value":"value 2"} in state: map[string]string{"%":"3", "id":"terraform-20250829003331390800000011", "project_id":"68b0f3ea3786781796f00e61", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"false", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-767971871.uw3zsmq.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-08-29T00:27:25Z", "results.0.id":"68b0f3ed3786781796f01682", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-7679718715049925699/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.12", "results.0.name":"test-acc-tf-c-7679718715049925699", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-573787722.suq7nij.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-08-29T00:27:26Z", "results.1.id":"68b0f3ee3786781796f01694", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-5737877227601476910/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.12", "results.1.name":"test-acc-tf-c-5737877227601476910", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"DELETING", "results.1.tags.#":"0", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-670954923.ctzvhgz.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-08-29T00:27:25Z", "results.2.id":"68b0f3ed3786781796f01680", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-6709549239102812485/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.12", "results.2.name":"test-acc-tf-c-6709549239102812485", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"IDLE", "results.2.tags.#":"2", "results.2.tags.0.%":"2", "results.2.tags.0.key":"key 1", "results.2.tags.0.value":"value 1", "results.2.tags.1.%":"2", "results.2.tags.1.key":"key 2", "results.2.tags.1.value":"value 2", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"true", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-380055179.mru2ihm.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-08-29T00:27:25Z", "results.3.id":"68b0f3edc342212f74ff2315", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68b0f3ea3786781796f00e61/serverless/test-acc-tf-c-3800551792836455231/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.12", "results.3.name":"test-acc-tf-c-3800551792836455231", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-08-29T00:40:25.5498965Z --- FAIL: TestAccServerlessInstance_withTags (779.93s)
```

- 2025-08-30 PASS 10 minutes
- 2025-08-31 PASS 11 minutes
- 2025-09-01
  - FAIL 20 minutes

### Error 2025-09-01T00:50:46+00:00
```
2025-09-01T00:50:46.6781306Z === RUN   TestAccServerlessInstance_withTags
2025-09-01T00:50:46.6784289Z === CONT  TestAccServerlessInstance_withTags
2025-09-01T00:50:46.6824194Z === NAME  TestAccServerlessInstance_withTags
2025-09-01T00:50:46.6825188Z     resource_serverless_instance_test.go:30: Step 1/3 error: Error running apply: exit status 1
2025-09-01T00:50:46.6825630Z         
2025-09-01T00:50:46.6826276Z         Error: error creating MongoDB Serverless Instance: context deadline exceeded
2025-09-01T00:50:46.6826810Z         
2025-09-01T00:50:46.6827154Z           with mongodbatlas_serverless_instance.test,
2025-09-01T00:50:46.6827802Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_serverless_instance" "test":
2025-09-01T00:50:46.6828414Z           12: 	resource "mongodbatlas_serverless_instance" "test" {
2025-09-01T00:50:46.6828790Z         
2025-09-01T00:50:46.6829859Z --- FAIL: TestAccServerlessInstance_withTags (1200.58s)
```

  - FAIL 29 minutes

### Error 2025-09-01T06:27:58+00:00
```
2025-09-01T06:27:58.5032318Z === RUN   TestAccServerlessInstance_withTags
2025-09-01T06:27:58.5035249Z === CONT  TestAccServerlessInstance_withTags
2025-09-01T06:27:58.5104403Z === NAME  TestAccServerlessInstance_withTags
2025-09-01T06:27:58.5105632Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-09-01T06:27:58.5106542Z         
2025-09-01T06:27:58.5107690Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-1971794250011612464): context deadline exceeded
2025-09-01T06:27:58.5108552Z         
2025-09-01T06:27:58.5108983Z --- FAIL: TestAccServerlessInstance_withTags (1758.34s)
```

  - PASS 16 minutes
  - PASS 11 minutes
  - PASS 10 minutes
  - PASS 12 minutes
  - PASS 10 minutes
  - PASS 11 minutes
- 2025-09-02 PASS 12 minutes
- 2025-09-03 PASS 10 minutes
- 2025-09-04 PASS 10 minutes