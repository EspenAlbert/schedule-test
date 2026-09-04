# federated/federateddatabaseinstance/TestAccFederatedDatabaseInstance_withPrivateEndpoint Test Details
# Found 32 TestRuns in dev, qa from 2026-08-06 to 2026-09-04 from master branch: 1 unique tests, PASS(x 31) FAIL
Success rate: 96.88%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-08-24 00:42](#error-2026-08-24t0042210000) |  | dev | 337.06s

### Timeline
- 2026-08-05: MISSING
- 2026-08-06 PASS 6 minutes
- 2026-08-07 PASS 6 minutes
- 2026-08-08 PASS 7 minutes
- 2026-08-09: MISSING
- 2026-08-10 PASS 6 minutes
- 2026-08-11 PASS 6 minutes
- 2026-08-12 PASS 7 minutes
- 2026-08-13 PASS 6 minutes
- 2026-08-14 PASS 7 minutes
- 2026-08-15 PASS 6 minutes
- 2026-08-16: MISSING
- 2026-08-17 PASS 6 minutes
- 2026-08-18 PASS 7 minutes
- 2026-08-19 PASS 6 minutes
- 2026-08-20 PASS 7 minutes
- 2026-08-21 PASS 7 minutes
- 2026-08-22 PASS 7 minutes
- 2026-08-23: MISSING
- 2026-08-24

### Error 2026-08-24T00:42:21+00:00
```
2026-08-24T00:42:21.7141911Z === RUN   TestAccFederatedDatabaseInstance_withPrivateEndpoint
2026-08-24T00:42:21.7177577Z    test_terraform_path=/home/runner/work/_temp/cd94b244-8e6d-44b3-baf0-40c005bf4b2a/terraform test_name=TestAccFederatedDatabaseInstance_withPrivateEndpoint test_working_directory=/tmp/plugintest3169356208 test_step_number=2
2026-08-24T00:42:21.7179479Z     resource_federated_database_instance_test.go:196: Step 2/2 error running refresh: After refreshing state during this test step, a followup plan was not empty.
2026-08-24T00:42:21.7180228Z         stdout:
2026-08-24T00:42:21.7180471Z         
2026-08-24T00:42:21.7181193Z         Terraform used the selected providers to generate the following execution
2026-08-24T00:42:21.7181866Z         plan. Resource actions are indicated with the following symbols:
2026-08-24T00:42:21.7182294Z           + create
2026-08-24T00:42:21.7182653Z         -/+ destroy and then create replacement
2026-08-24T00:42:21.7182991Z         
2026-08-24T00:42:21.7183352Z         Terraform will perform the following actions:
2026-08-24T00:42:21.7183687Z         
2026-08-24T00:42:21.7184046Z           # aws_vpc_endpoint.test will be created
2026-08-24T00:42:21.7184492Z           + resource "aws_vpc_endpoint" "test" {
2026-08-24T00:42:21.7185011Z               + arn                   = (known after apply)
2026-08-24T00:42:21.7185686Z               + cidr_blocks           = (known after apply)
2026-08-24T00:42:21.7186225Z               + dns_entry             = (known after apply)
2026-08-24T00:42:21.7186739Z               + id                    = (known after apply)
2026-08-24T00:42:21.7187253Z               + ip_address_type       = (known after apply)
2026-08-24T00:42:21.7187778Z               + network_interface_ids = (known after apply)
2026-08-24T00:42:21.7188298Z               + owner_id              = (known after apply)
2026-08-24T00:42:21.7188815Z               + policy                = (known after apply)
2026-08-24T00:42:21.7189630Z               + prefix_list_id        = (known after apply)
2026-08-24T00:42:21.7190097Z               + private_dns_enabled   = false
2026-08-24T00:42:21.7190610Z               + requester_managed     = (known after apply)
2026-08-24T00:42:21.7191133Z               + route_table_ids       = (known after apply)
2026-08-24T00:42:21.7191583Z               + security_group_ids    = [
2026-08-24T00:42:21.7192041Z                   + "sg-000703b25327c671e",
2026-08-24T00:42:21.7192376Z                 ]
2026-08-24T00:42:21.7193066Z               + service_name          = "com.amazonaws.vpce.us-east-1.vpce-svc-0a7247db33497082e"
2026-08-24T00:42:21.7193734Z               + state                 = (known after apply)
2026-08-24T00:42:21.7194172Z               + subnet_ids            = [
2026-08-24T00:42:21.7194642Z                   + "subnet-01b1bb78a2ba74c22",
2026-08-24T00:42:21.7194984Z                 ]
2026-08-24T00:42:21.7195412Z               + tags_all              = (known after apply)
2026-08-24T00:42:21.7195912Z               + vpc_endpoint_type     = "Interface"
2026-08-24T00:42:21.7196471Z               + vpc_id                = "vpc-049b5407463a88afd"
2026-08-24T00:42:21.7196819Z         
2026-08-24T00:42:21.7197192Z               + dns_options (known after apply)
2026-08-24T00:42:21.7197523Z             }
2026-08-24T00:42:21.7197755Z         
2026-08-24T00:42:21.7198441Z           # mongodbatlas_privatelink_endpoint_service_data_federation_online_archive.test must be replaced
2026-08-24T00:42:21.7199628Z         -/+ resource "mongodbatlas_privatelink_endpoint_service_data_federation_online_archive" "test" {
2026-08-24T00:42:21.7201173Z               ~ customer_endpoint_dns_name = "vpce-00f0948b859e4068c-mngeqdjo.vpce-svc-0a7247db33497082e.us-east-1.vpce.amazonaws.com" -> (known after apply) # forces replacement
2026-08-24T00:42:21.7202467Z               ~ endpoint_id                = "vpce-00f0948b859e4068c" -> (known after apply) # forces replacement
2026-08-24T00:42:21.7203975Z               ~ id                         = "ZW5kcG9pbnRfaWQ=:dnBjZS0wMGYwOTQ4Yjg1OWU0MDY4Yw==-cHJvamVjdF9pZA==:NmE4YjhlODdjZWRlNjkzZmRkMTIyOGEz" -> (known after apply)
2026-08-24T00:42:21.7204959Z               ~ type                       = "DATA_LAKE" -> (known after apply)
2026-08-24T00:42:21.7205501Z                 # (5 unchanged attributes hidden)
2026-08-24T00:42:21.7205835Z             }
2026-08-24T00:42:21.7206066Z         
2026-08-24T00:42:21.7206417Z         Plan: 2 to add, 0 to change, 1 to destroy.
2026-08-24T00:42:21.7206884Z --- FAIL: TestAccFederatedDatabaseInstance_withPrivateEndpoint (337.64s)
```

- 2026-08-25 PASS 6 minutes
- 2026-08-26 PASS 7 minutes
- 2026-08-27 PASS 7 minutes
- 2026-08-28 PASS 6 minutes
- 2026-08-29 PASS 8 minutes
- 2026-08-30: MISSING
- 2026-08-31 PASS 6 minutes
- 2026-09-01 PASS 7 minutes
- 2026-09-02 PASS 7 minutes
- 2026-09-03 PASS 6 minutes
- 2026-09-04 PASS 7 minutes

## QA Environment
### Timeline
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
- 2026-08-08: MISSING
- 2026-08-09 PASS 6 minutes
- 2026-08-10: MISSING
- 2026-08-11: MISSING
- 2026-08-12: MISSING
- 2026-08-13 PASS 6 minutes
- 2026-08-14: MISSING
- 2026-08-15: MISSING
- 2026-08-16 PASS 6 minutes
- 2026-08-17: MISSING
- 2026-08-18: MISSING
- 2026-08-19: MISSING
- 2026-08-20: MISSING
- 2026-08-21: MISSING
- 2026-08-22: MISSING
- 2026-08-23 PASS 6 minutes
- 2026-08-24: MISSING
- 2026-08-25: MISSING
- 2026-08-26: MISSING
- 2026-08-27 PASS 6 minutes
- 2026-08-28: MISSING
- 2026-08-29: MISSING
- 2026-08-30 PASS 7 minutes
- 2026-08-31: MISSING
- 2026-09-01: MISSING
- 2026-09-02: MISSING
- 2026-09-03: MISSING
- 2026-09-04: MISSING
