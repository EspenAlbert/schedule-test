# serverless/serverlessinstance/TestAccServerlessInstance_withTags Test Details
# Found 39 TestRuns in dev, qa from 2025-10-01 to 2025-10-30 from master branch: 1 unique tests, PASS(x 36) FAIL(x 3)
Success rate: 92.31%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-01 14:14](#error-2025-10-01t1414230000) | CheckFailure for serverless_instances.test at Step: 2 Checks: 9,10,11 | dev | 428.01s
[2025-10-12 00:28](#error-2025-10-12t0028400000) |  | qa | 1755.00s
[2025-10-27 00:30](#error-2025-10-27t0030310000) |  | dev | 1756.08s

## Timeline
- 2025-09-30: MISSING
- 2025-10-01
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - PASS 10 minutes
  - FAIL 7 minutes

### Error 2025-10-01T14:14:23+00:00
```
2025-10-01T14:14:23.8441311Z === RUN   TestAccServerlessInstance_withTags
2025-10-01T14:14:23.8444777Z === CONT  TestAccServerlessInstance_withTags
2025-10-01T14:20:30.8165112Z === NAME  TestAccServerlessInstance_withTags
2025-10-01T14:20:30.8166199Z     resource_serverless_instance_test.go:30: Step 2/3 error: Check failed: Check 9/11 error: data.mongodbatlas_serverless_instances.test: Attribute 'results.0.tags.#' expected "2", got "0"
2025-10-01T14:20:30.8197906Z         Check 10/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 1", "value":"value 1"} in state: map[string]string{"%":"3", "id":"terraform-20251001142030678400000011", "project_id":"68dd373d61ce23123a8d5163", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"false", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-834257452.kex3mw8.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-10-01T14:14:24Z", "results.0.id":"68dd3740b7cc117184b2ce77", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.14", "results.0.name":"test-acc-tf-c-8342574520258545698", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-330385236.yrlf8pw.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-10-01T14:14:24Z", "results.1.id":"68dd374061ce23123a8d6916", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.14", "results.1.name":"test-acc-tf-c-3303852369259846145", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"IDLE", "results.1.tags.#":"2", "results.1.tags.0.%":"2", "results.1.tags.0.key":"key 1", "results.1.tags.0.value":"value 1", "results.1.tags.1.%":"2", "results.1.tags.1.key":"key 2", "results.1.tags.1.value":"value 2", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-124147787.oo9a34v.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-10-01T14:14:26Z", "results.2.id":"68dd3742b7cc117184b2d7c2", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.14", "results.2.name":"test-acc-tf-c-1241477873748312504", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"DELETING", "results.2.tags.#":"0", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"true", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-236118231.dguzdia.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-10-01T14:14:24Z", "results.3.id":"68dd3740b7cc117184b2ce76", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.14", "results.3.name":"test-acc-tf-c-2361182319354242338", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-10-01T14:20:30.8254367Z         Check 11/11 error: "data.mongodbatlas_serverless_instances.test" no TypeSet element "results.0.tags.*", with nested attrs map[string]string{"key":"key 2", "value":"value 2"} in state: map[string]string{"%":"3", "id":"terraform-20251001142030678400000011", "project_id":"68dd373d61ce23123a8d5163", "results.#":"4", "results.0.%":"16", "results.0.auto_indexing":"false", "results.0.connection_strings_private_endpoint_srv.#":"0", "results.0.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-834257452.kex3mw8.mongodb-dev.net", "results.0.continuous_backup_enabled":"true", "results.0.create_date":"2025-10-01T14:14:24Z", "results.0.id":"68dd3740b7cc117184b2ce77", "results.0.links.#":"3", "results.0.links.0.%":"2", "results.0.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698", "results.0.links.0.rel":"self", "results.0.links.1.%":"2", "results.0.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698/backup/restoreJobs", "results.0.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.0.links.2.%":"2", "results.0.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-8342574520258545698/backup/snapshots", "results.0.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.0.mongo_db_version":"8.0.14", "results.0.name":"test-acc-tf-c-8342574520258545698", "results.0.project_id":"", "results.0.provider_settings_backing_provider_name":"AWS", "results.0.provider_settings_provider_name":"SERVERLESS", "results.0.provider_settings_region_name":"US_EAST_1", "results.0.state_name":"DELETING", "results.0.tags.#":"0", "results.0.termination_protection_enabled":"false", "results.1.%":"16", "results.1.auto_indexing":"false", "results.1.connection_strings_private_endpoint_srv.#":"0", "results.1.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-330385236.yrlf8pw.mongodb-dev.net", "results.1.continuous_backup_enabled":"true", "results.1.create_date":"2025-10-01T14:14:24Z", "results.1.id":"68dd374061ce23123a8d6916", "results.1.links.#":"3", "results.1.links.0.%":"2", "results.1.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145", "results.1.links.0.rel":"self", "results.1.links.1.%":"2", "results.1.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145/backup/restoreJobs", "results.1.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.1.links.2.%":"2", "results.1.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-3303852369259846145/backup/snapshots", "results.1.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.1.mongo_db_version":"8.0.14", "results.1.name":"test-acc-tf-c-3303852369259846145", "results.1.project_id":"", "results.1.provider_settings_backing_provider_name":"AWS", "results.1.provider_settings_provider_name":"SERVERLESS", "results.1.provider_settings_region_name":"US_EAST_1", "results.1.state_name":"IDLE", "results.1.tags.#":"2", "results.1.tags.0.%":"2", "results.1.tags.0.key":"key 1", "results.1.tags.0.value":"value 1", "results.1.tags.1.%":"2", "results.1.tags.1.key":"key 2", "results.1.tags.1.value":"value 2", "results.1.termination_protection_enabled":"false", "results.2.%":"16", "results.2.auto_indexing":"false", "results.2.connection_strings_private_endpoint_srv.#":"0", "results.2.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-124147787.oo9a34v.mongodb-dev.net", "results.2.continuous_backup_enabled":"true", "results.2.create_date":"2025-10-01T14:14:26Z", "results.2.id":"68dd3742b7cc117184b2d7c2", "results.2.links.#":"3", "results.2.links.0.%":"2", "results.2.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504", "results.2.links.0.rel":"self", "results.2.links.1.%":"2", "results.2.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504/backup/restoreJobs", "results.2.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.2.links.2.%":"2", "results.2.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-1241477873748312504/backup/snapshots", "results.2.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.2.mongo_db_version":"8.0.14", "results.2.name":"test-acc-tf-c-1241477873748312504", "results.2.project_id":"", "results.2.provider_settings_backing_provider_name":"AWS", "results.2.provider_settings_provider_name":"SERVERLESS", "results.2.provider_settings_region_name":"US_EAST_1", "results.2.state_name":"DELETING", "results.2.tags.#":"0", "results.2.termination_protection_enabled":"false", "results.3.%":"16", "results.3.auto_indexing":"true", "results.3.connection_strings_private_endpoint_srv.#":"0", "results.3.connection_strings_standard_srv":"mongodb+srv://test-acc-tf-c-236118231.dguzdia.mongodb-dev.net", "results.3.continuous_backup_enabled":"true", "results.3.create_date":"2025-10-01T14:14:24Z", "results.3.id":"68dd3740b7cc117184b2ce76", "results.3.links.#":"3", "results.3.links.0.%":"2", "results.3.links.0.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338", "results.3.links.0.rel":"self", "results.3.links.1.%":"2", "results.3.links.1.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338/backup/restoreJobs", "results.3.links.1.rel":"https://cloud.mongodb.com/restoreJobs", "results.3.links.2.%":"2", "results.3.links.2.href":"https://cloud-dev.mongodb.com/api/atlas/v2/groups/68dd373d61ce23123a8d5163/serverless/test-acc-tf-c-2361182319354242338/backup/snapshots", "results.3.links.2.rel":"https://cloud.mongodb.com/snapshots", "results.3.mongo_db_version":"8.0.14", "results.3.name":"test-acc-tf-c-2361182319354242338", "results.3.project_id":"", "results.3.provider_settings_backing_provider_name":"AWS", "results.3.provider_settings_provider_name":"SERVERLESS", "results.3.provider_settings_region_name":"US_EAST_1", "results.3.state_name":"DELETING", "results.3.tags.#":"0", "results.3.termination_protection_enabled":"false"}
2025-10-01T14:21:31.9461236Z --- FAIL: TestAccServerlessInstance_withTags (428.10s)
```

- 2025-10-02 PASS 10 minutes
- 2025-10-03 PASS 10 minutes
- 2025-10-04 PASS 10 minutes
- 2025-10-05 PASS 10 minutes
- 2025-10-06 PASS 10 minutes
- 2025-10-07 PASS 10 minutes
- 2025-10-08 PASS 11 minutes
- 2025-10-09 PASS 13 minutes
- 2025-10-10 PASS 10 minutes
- 2025-10-11 PASS 10 minutes
- 2025-10-12

### Error 2025-10-12T00:28:40+00:00
```
2025-10-12T00:28:40.8040227Z === RUN   TestAccServerlessInstance_withTags
2025-10-12T00:28:40.8044102Z === CONT  TestAccServerlessInstance_withTags
2025-10-12T00:57:55.8336670Z === NAME  TestAccServerlessInstance_withTags
2025-10-12T00:57:55.8339346Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-12T00:57:55.8339899Z         
2025-10-12T00:57:55.8340555Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-6259589918792999676): context deadline exceeded
2025-10-12T00:57:55.8341056Z         
2025-10-12T00:57:55.8341327Z --- FAIL: TestAccServerlessInstance_withTags (1755.03s)
```

- 2025-10-13 PASS 12 minutes
- 2025-10-14 PASS 10 minutes
- 2025-10-15 PASS 10 minutes
- 2025-10-16 PASS 16 minutes
- 2025-10-17 PASS 12 minutes
- 2025-10-18 PASS 10 minutes
- 2025-10-19 PASS 10 minutes
- 2025-10-20
  - PASS 12 minutes
  - PASS 10 minutes
- 2025-10-21 PASS 10 minutes
- 2025-10-22
  - PASS 10 minutes
  - PASS 10 minutes
- 2025-10-23 PASS 10 minutes
- 2025-10-24 PASS 11 minutes
- 2025-10-25 PASS 10 minutes
- 2025-10-26 PASS 10 minutes
- 2025-10-27

### Error 2025-10-27T00:30:31+00:00
```
2025-10-27T00:30:31.9644763Z === RUN   TestAccServerlessInstance_withTags
2025-10-27T00:30:31.9649541Z === CONT  TestAccServerlessInstance_withTags
2025-10-27T00:59:48.7182983Z === NAME  TestAccServerlessInstance_withTags
2025-10-27T00:59:48.7185326Z     resource_serverless_instance_test.go:30: Error running post-test destroy, there may be dangling resources: exit status 1
2025-10-27T00:59:48.7185917Z         
2025-10-27T00:59:48.7186553Z         Error: error deleting MongoDB Serverless Instance (test-acc-tf-c-820728336342560112): context deadline exceeded
2025-10-27T00:59:48.7187042Z         
2025-10-27T00:59:48.7187305Z --- FAIL: TestAccServerlessInstance_withTags (1756.75s)
```

- 2025-10-28 PASS 10 minutes
- 2025-10-29 PASS 12 minutes
- 2025-10-30 PASS 10 minutes